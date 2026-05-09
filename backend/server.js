const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || '1234';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'tanu-demo-admin-token';
const OTP_EXPIRY_MS = 5 * 60 * 1000;

const DATA_DIR = path.join(__dirname, 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const OTP_FILE = path.join(DATA_DIR, 'otps.json');
const PUBLIC_DIR = path.join(__dirname, '..');

const DEFAULT_PRODUCTS = [
  { id: 'urad-250', name: 'Urad Papad', category: 'Classic', price: 130, pack: '250g', stock: 25, image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Urad%20Indian%20Papad.jpg' },
  { id: 'masala-250', name: 'Masala Papad', category: 'Spicy', price: 140, pack: '250g', stock: 25, image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Onion%20Masala%20Papad.jpg' },
  { id: 'rice-250', name: 'Rice Papad', category: 'Light', price: 120, pack: '250g', stock: 25, image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rice%20papad.jpg' },
  { id: 'family-combo', name: 'Family Combo Pack', category: 'Combo', price: 399, pack: '3 packs', stock: 15, image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20papadums.jpg' }
];

fs.mkdirSync(DATA_DIR, { recursive: true });
function readJson(file, fallback) {
  try {
    if (!fs.existsSync(file)) return fallback;
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    console.error('Read JSON failed:', file, error.message);
    return fallback;
  }
}
function writeJson(file, value) {
  fs.writeFileSync(file, JSON.stringify(value, null, 2));
}
function ensureFiles() {
  if (!fs.existsSync(ORDERS_FILE)) writeJson(ORDERS_FILE, []);
  if (!fs.existsSync(PRODUCTS_FILE)) writeJson(PRODUCTS_FILE, DEFAULT_PRODUCTS);
  if (!fs.existsSync(OTP_FILE)) writeJson(OTP_FILE, {});
}
function generateOrderId() {
  return 'TP' + Date.now().toString().slice(-6);
}
function cleanMobile(value) {
  return String(value || '').replace(/\D/g, '').slice(-10);
}
function requireAdmin(req, res, next) {
  const auth = req.headers.authorization || '';
  const token = auth.replace(/^Bearer\s+/i, '');
  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ ok: false, error: 'Admin login required' });
  }
  next();
}

ensureFiles();
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, app: 'Tanu Papad Backend', time: new Date().toISOString() });
});

app.get('/api/products', (req, res) => {
  res.json({ ok: true, products: readJson(PRODUCTS_FILE, DEFAULT_PRODUCTS) });
});

app.post('/api/otp/send', (req, res) => {
  const mobile = cleanMobile(req.body.mobile);
  if (!/^\d{10}$/.test(mobile)) {
    return res.status(400).json({ ok: false, error: 'Valid 10 digit mobile number required' });
  }
  const otp = String(Math.floor(100000 + Math.random() * 900000));
  const otps = readJson(OTP_FILE, {});
  otps[mobile] = { otp, expiresAt: Date.now() + OTP_EXPIRY_MS, verified: false };
  writeJson(OTP_FILE, otps);
  console.log(`Demo OTP for ${mobile}: ${otp}`);
  res.json({ ok: true, message: 'OTP generated. Demo OTP is returned for testing.', demoOtp: otp });
});

app.post('/api/otp/verify', (req, res) => {
  const mobile = cleanMobile(req.body.mobile);
  const otp = String(req.body.otp || '').trim();
  const otps = readJson(OTP_FILE, {});
  const saved = otps[mobile];
  if (!saved || saved.otp !== otp || saved.expiresAt < Date.now()) {
    return res.status(400).json({ ok: false, error: 'Invalid or expired OTP' });
  }
  const otpToken = 'otp_' + mobile + '_' + Date.now();
  otps[mobile] = { ...saved, verified: true, otpToken, tokenExpiresAt: Date.now() + OTP_EXPIRY_MS };
  writeJson(OTP_FILE, otps);
  res.json({ ok: true, otpToken });
});

app.post('/api/orders', (req, res) => {
  const mobile = cleanMobile(req.body.mobile);
  const otps = readJson(OTP_FILE, {});
  const savedOtp = otps[mobile];
  if (!savedOtp || !savedOtp.verified || savedOtp.otpToken !== req.body.otpToken || savedOtp.tokenExpiresAt < Date.now()) {
    return res.status(401).json({ ok: false, error: 'Mobile OTP verification required before order' });
  }
  const items = Array.isArray(req.body.items) ? req.body.items : [];
  if (!items.length) return res.status(400).json({ ok: false, error: 'Cart items required' });
  const order = {
    orderId: generateOrderId(),
    createdAt: new Date().toISOString(),
    status: 'Pending Admin Approval',
    approved: false,
    name: String(req.body.name || '').trim(),
    mobile,
    email: String(req.body.email || '').trim(),
    address: String(req.body.address || '').trim(),
    pincode: String(req.body.pincode || '').trim(),
    city: String(req.body.city || '').trim(),
    state: String(req.body.state || '').trim(),
    payment: String(req.body.payment || 'Cash on Delivery'),
    items,
    subtotal: Number(req.body.subtotal || 0),
    delivery: Number(req.body.delivery || 0),
    total: Number(req.body.total || 0),
    note: 'Order received. Waiting for admin approval.'
  };
  const orders = readJson(ORDERS_FILE, []);
  orders.unshift(order);
  writeJson(ORDERS_FILE, orders);
  delete otps[mobile];
  writeJson(OTP_FILE, otps);
  res.json({ ok: true, orderId: order.orderId, status: order.status, order });
});

app.get('/api/orders/track/:query', (req, res) => {
  const query = String(req.params.query || '').toLowerCase();
  const orders = readJson(ORDERS_FILE, []);
  const order = orders.find((entry) => entry.orderId.toLowerCase() === query || entry.mobile === cleanMobile(query));
  if (!order) return res.status(404).json({ ok: false, error: 'Order not found' });
  res.json({ ok: true, order });
});

app.post('/api/admin/login', (req, res) => {
  if (String(req.body.username || '').toLowerCase() === ADMIN_USER && String(req.body.password || '') === ADMIN_PASS) {
    return res.json({ ok: true, token: ADMIN_TOKEN });
  }
  res.status(401).json({ ok: false, error: 'Wrong username or password' });
});

app.get('/api/admin/orders', requireAdmin, (req, res) => {
  res.json({ ok: true, orders: readJson(ORDERS_FILE, []) });
});

app.patch('/api/admin/orders/:orderId/status', requireAdmin, (req, res) => {
  const orders = readJson(ORDERS_FILE, []);
  const index = orders.findIndex((entry) => entry.orderId === req.params.orderId);
  if (index < 0) return res.status(404).json({ ok: false, error: 'Order not found' });
  orders[index].status = String(req.body.status || orders[index].status);
  orders[index].approved = !['Pending Admin Approval', 'Rejected', 'Cancelled'].includes(orders[index].status);
  orders[index].note = 'Status updated by Tanu Papad admin.';
  orders[index].updatedAt = new Date().toISOString();
  writeJson(ORDERS_FILE, orders);
  res.json({ ok: true, order: orders[index] });
});

app.post('/api/admin/orders/:orderId/approve', requireAdmin, (req, res) => {
  const orders = readJson(ORDERS_FILE, []);
  const index = orders.findIndex((entry) => entry.orderId === req.params.orderId);
  if (index < 0) return res.status(404).json({ ok: false, error: 'Order not found' });
  orders[index].status = 'Confirmed';
  orders[index].approved = true;
  orders[index].note = 'Order approved by admin.';
  orders[index].updatedAt = new Date().toISOString();
  writeJson(ORDERS_FILE, orders);
  res.json({ ok: true, order: orders[index] });
});

app.post('/api/admin/orders/:orderId/reject', requireAdmin, (req, res) => {
  const orders = readJson(ORDERS_FILE, []);
  const index = orders.findIndex((entry) => entry.orderId === req.params.orderId);
  if (index < 0) return res.status(404).json({ ok: false, error: 'Order not found' });
  orders[index].status = 'Rejected';
  orders[index].approved = false;
  orders[index].note = String(req.body.reason || 'Order rejected by admin.');
  orders[index].updatedAt = new Date().toISOString();
  writeJson(ORDERS_FILE, orders);
  res.json({ ok: true, order: orders[index] });
});

app.get('/api/admin/products', requireAdmin, (req, res) => {
  res.json({ ok: true, products: readJson(PRODUCTS_FILE, DEFAULT_PRODUCTS) });
});

app.post('/api/admin/products', requireAdmin, (req, res) => {
  const products = readJson(PRODUCTS_FILE, DEFAULT_PRODUCTS);
  const product = {
    id: req.body.id || String(req.body.name || 'product').toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString().slice(-4),
    name: String(req.body.name || '').trim(),
    category: String(req.body.category || '').trim(),
    price: Number(req.body.price || 0),
    pack: String(req.body.pack || '').trim(),
    stock: Number(req.body.stock || 0),
    image: String(req.body.image || '').trim()
  };
  products.push(product);
  writeJson(PRODUCTS_FILE, products);
  res.json({ ok: true, product });
});

app.use(express.static(PUBLIC_DIR));
app.get('*', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Tanu Papad backend running at http://localhost:${PORT}`);
  console.log('Frontend files are served as-is from the parent folder.');
});
