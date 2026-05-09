const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";
const STATUSES = ["Order Placed", "Confirmed", "Packed", "Shipped", "Out for Delivery", "Delivered", "Cancelled"];

const defaultProducts = [
  { id: "urad-250", name: "Urad Papad", category: "Classic", price: 130, pack: "250g", tag: "Classic", desc: "Traditional crispy urad papad for daily meals.", taste: "Medium", stock: 25, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Urad%20Indian%20Papad.jpg" },
  { id: "masala-250", name: "Masala Papad", category: "Spicy", price: 140, pack: "250g", tag: "Spicy", desc: "Chatpata papad for snacks and party starters.", taste: "Spicy", stock: 25, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Onion%20Masala%20Papad.jpg" },
  { id: "rice-250", name: "Rice Papad", category: "Light", price: 120, pack: "250g", tag: "Light", desc: "Light and crunchy rice papad for all age groups.", taste: "Mild", stock: 25, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rice%20papad.jpg" },
  { id: "family-combo", name: "Family Combo Pack", category: "Combo", price: 399, pack: "3 packs", tag: "Best Value", desc: "Urad, masala and rice papad combo for families.", taste: "Mixed", stock: 15, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20papadums.jpg" }
];

function safeGet(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    if (!value || value === "undefined" || value === "null") return fallback;
    return JSON.parse(value);
  } catch (error) {
    localStorage.removeItem(key);
    return fallback;
  }
}
function safeSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { console.warn("Storage failed", error); }
}
function money(amount) { return "₹" + Number(amount || 0).toLocaleString("en-IN"); }
function getProducts() { return safeGet("tanuPapadProducts", defaultProducts); }
function saveProducts(products) { safeSet("tanuPapadProducts", products); }
function getOrders() { return safeGet("tanuPapadOrders", []); }
function saveOrders(orders) { safeSet("tanuPapadOrders", orders); }
function getSession(key) { try { return sessionStorage.getItem(key); } catch (e) { return null; } }
function setSession(key, value) { try { sessionStorage.setItem(key, value); } catch (e) {} }
function removeSession(key) { try { sessionStorage.removeItem(key); } catch (e) {} }

if (!localStorage.getItem("tanuPapadProducts")) saveProducts(defaultProducts);

window.addEventListener("DOMContentLoaded", () => {
  const loginScreen = document.getElementById("loginScreen");
  const adminApp = document.getElementById("adminApp");
  const loginForm = document.getElementById("loginForm");
  const logoutBtn = document.getElementById("logoutBtn");

  function showApp() {
    loginScreen.hidden = true;
    adminApp.hidden = false;
    renderAll();
  }

  function showLogin() {
    loginScreen.hidden = false;
    adminApp.hidden = true;
  }

  if (getSession("tanuPapadAdminLoggedIn") === "yes") showApp();
  else showLogin();

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = document.getElementById("adminUser").value.trim().toLowerCase();
    const pass = document.getElementById("adminPass").value.trim();
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      setSession("tanuPapadAdminLoggedIn", "yes");
      showApp();
    } else {
      alert("Wrong username or password. Use username: admin and password: 1234");
    }
  });

  logoutBtn.addEventListener("click", () => {
    removeSession("tanuPapadAdminLoggedIn");
    showLogin();
  });

  document.querySelectorAll("[data-tab]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelectorAll("[data-tab]").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
      document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
      document.getElementById(link.dataset.tab).classList.add("active");
      document.getElementById("pageTitle").textContent = link.textContent;
      renderAll();
    });
  });

  const orderSearch = document.getElementById("orderSearch");
  if (orderSearch) orderSearch.addEventListener("input", renderOrders);

  document.getElementById("seedOrderBtn").addEventListener("click", () => {
    const orderId = "TP" + Date.now().toString().slice(-6);
    const demo = {
      orderId,
      createdAt: new Date().toISOString(),
      name: "Demo Customer",
      mobile: "9876543210",
      email: "demo@example.com",
      address: "Gwalior, Madhya Pradesh",
      payment: "COD",
      items: [{ id: "family-combo", name: "Family Combo Pack", pack: "3 packs", price: 399, qty: 1, lineTotal: 399 }],
      subtotal: 399,
      delivery: 49,
      discount: 0,
      total: 448,
      status: "Order Placed",
      note: "Demo order created from admin panel."
    };
    const orders = getOrders();
    orders.unshift(demo);
    saveOrders(orders);
    renderAll();
  });

  document.getElementById("productForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("productName").value.trim();
    const idValue = document.getElementById("productId").value || name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-" + Date.now().toString().slice(-4);
    const product = {
      id: idValue,
      name,
      category: document.getElementById("productCategory").value.trim(),
      pack: document.getElementById("productPack").value.trim(),
      price: Number(document.getElementById("productPrice").value),
      stock: Number(document.getElementById("productStock").value),
      image: document.getElementById("productImage").value.trim() || "https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20papadums.jpg",
      tag: document.getElementById("productCategory").value.trim(),
      desc: "Fresh homemade papad pack.",
      taste: "Medium"
    };
    const products = getProducts();
    const existingIndex = products.findIndex(item => item.id === product.id);
    if (existingIndex >= 0) products[existingIndex] = { ...products[existingIndex], ...product };
    else products.push(product);
    saveProducts(products);
    event.target.reset();
    document.getElementById("productId").value = "";
    renderAll();
  });
});

function renderStats() {
  const orders = getOrders();
  const products = getProducts();
  const totalSales = orders.filter(o => o.status !== "Cancelled").reduce((sum, order) => sum + Number(order.total || 0), 0);
  const pending = orders.filter(o => !["Delivered", "Cancelled"].includes(o.status)).length;
  const delivered = orders.filter(o => o.status === "Delivered").length;
  const lowStock = products.filter(p => Number(p.stock || 0) <= 5).length;
  const stats = [
    ["Total Orders", orders.length],
    ["Pending Orders", pending],
    ["Delivered", delivered],
    ["Total Sales", money(totalSales)],
    ["Products", products.length],
    ["Low Stock", lowStock],
    ["COD Orders", orders.filter(o => o.payment === "COD").length],
    ["Online/UPI", orders.filter(o => o.payment !== "COD").length]
  ];
  document.getElementById("statsGrid").innerHTML = stats.slice(0,4).map(([label, value]) => `<div class="stat-card"><span>${label}</span><strong>${value}</strong></div>`).join("");
  document.getElementById("reportStats").innerHTML = stats.map(([label, value]) => `<div class="stat-card"><span>${label}</span><strong>${value}</strong></div>`).join("");
}

function renderLatestOrders() {
  const latest = getOrders().slice(0, 5);
  document.getElementById("latestOrders").innerHTML = latest.length ? latest.map(order => `
    <div class="list-card"><b>${order.orderId}</b><span>${order.name} • ${money(order.total)} • ${order.status}</span></div>
  `).join("") : `<div class="empty">No orders yet. Place an order from website or create demo order.</div>`;
}

function renderOrders() {
  const search = document.getElementById("orderSearch")?.value.trim().toLowerCase() || "";
  const orders = getOrders().filter(order => [order.orderId, order.name, order.mobile, order.status].join(" ").toLowerCase().includes(search));
  document.getElementById("ordersTable").innerHTML = orders.length ? orders.map(order => `
    <tr>
      <td><span class="order-id">${order.orderId}</span><br><small>${new Date(order.createdAt).toLocaleString()}</small></td>
      <td>${order.name}<br><small>${order.mobile}<br>${order.address || ""}</small></td>
      <td>${(order.items || []).map(item => `${item.name} x ${item.qty}`).join("<br>")}</td>
      <td>${money(order.total)}</td>
      <td>${order.payment}</td>
      <td>
        <select class="status-select" onchange="updateOrderStatus('${order.orderId}', this.value)">
          ${STATUSES.map(status => `<option value="${status}" ${status === order.status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </td>
      <td>
        <button class="action-btn" onclick="copyOrder('${order.orderId}')">Copy</button>
        <button class="action-btn red" onclick="deleteOrder('${order.orderId}')">Delete</button>
      </td>
    </tr>
  `).join("") : `<tr><td colspan="7" class="empty">No orders found.</td></tr>`;
}

window.updateOrderStatus = function(orderId, status) {
  const orders = getOrders().map(order => order.orderId === orderId ? { ...order, status, note: "Status updated by Tanu Papad team." } : order);
  saveOrders(orders);
  renderAll();
};

window.copyOrder = function(orderId) {
  const order = getOrders().find(entry => entry.orderId === orderId);
  if (!order) return;
  const text = `Order ${order.orderId}\nCustomer: ${order.name}\nMobile: ${order.mobile}\nTotal: ${money(order.total)}\nStatus: ${order.status}`;
  if (navigator.clipboard) navigator.clipboard.writeText(text);
  alert("Order copied.");
};

window.deleteOrder = function(orderId) {
  if (!confirm("Delete this order?")) return;
  saveOrders(getOrders().filter(order => order.orderId !== orderId));
  renderAll();
};

function renderProducts() {
  const products = getProducts();
  document.getElementById("productsTable").innerHTML = products.map(product => `
    <tr>
      <td><b>${product.name}</b><br><small>${product.desc || ""}</small></td>
      <td>${product.category}</td>
      <td>${product.pack}</td>
      <td>${money(product.price)}</td>
      <td>${product.stock ?? 0}</td>
      <td><button class="action-btn" onclick="editProduct('${product.id}')">Edit</button><button class="action-btn red" onclick="deleteProduct('${product.id}')">Delete</button></td>
    </tr>
  `).join("");
}

window.editProduct = function(id) {
  const product = getProducts().find(item => item.id === id);
  if (!product) return;
  document.getElementById("productId").value = product.id;
  document.getElementById("productName").value = product.name;
  document.getElementById("productCategory").value = product.category;
  document.getElementById("productPack").value = product.pack;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productStock").value = product.stock ?? 0;
  document.getElementById("productImage").value = product.image || "";
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.deleteProduct = function(id) {
  if (!confirm("Delete this product?")) return;
  saveProducts(getProducts().filter(product => product.id !== id));
  renderAll();
};

function renderBestSellers() {
  const counts = {};
  getOrders().forEach(order => (order.items || []).forEach(item => counts[item.name] = (counts[item.name] || 0) + item.qty));
  const rows = Object.entries(counts).sort((a,b) => b[1] - a[1]);
  document.getElementById("bestSellers").innerHTML = rows.length ? rows.map(([name, qty]) => `<div class="list-card"><b>${name}</b><span>${qty} units sold</span></div>`).join("") : `<div class="empty">Best seller report will show after orders.</div>`;
}

function renderAll() {
  renderStats();
  renderLatestOrders();
  renderOrders();
  renderProducts();
  renderBestSellers();
}
