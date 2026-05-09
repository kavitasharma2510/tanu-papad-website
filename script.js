const WHATSAPP_NUMBER = "917067791424";
const BUSINESS_UPI_ID = "7067791424@upi"; // Replace with your real merchant UPI ID before going live
const BUSINESS_NAME = "Tanu Papad";

const i18n = {
  en: {
    topStrip: "Fresh Homemade Papad • WhatsApp Orders Available • COD Available",
    brandSub: "Proudly from Gwalior",
    trackOrder: "Track Order", cart: "Cart", heroEyebrow: "Traditional • Crispy • Premium",
    heroTitle: "Fresh homemade papad delivered to your doorstep.",
    heroText: "Tanu Papad brings Gwalior-style fresh, crispy and tasty papad for daily meals, snacks, hotels, shops and family functions.",
    shopNow: "Shop Now", orderWhatsapp: "Order on WhatsApp", packSizes: "Pack sizes", days56: "5-6 Days", madeDelivery: "Made + delivery", custom: "Custom", tasteOptions: "Taste options", bestSeller: "Best Seller", heroBestSeller: "Family Combo Pack ₹399",
    onlineShop: "Online Shop", freshPacks: "Fresh papad packs", searchPlaceholder: "Search papad...",
    aboutTitle: "About Tanu Papad", aboutHeading: "A local taste inspired by Gwalior heritage.", aboutText: "Tanu Papad is made for homes that love simple, crispy and traditional taste. We focus on fresh packing, clean handling and flavours that work with everyday Indian meals.",
    aboutLi1: "Traditional recipe and crispy texture", aboutLi2: "Fresh packing for every batch", aboutLi3: "Available for homes, shops, hotels and events",
    reviewsTitle: "Customer Reviews", reviewsHeading: "Trust-building testimonials", infoTitle: "Customer Information", infoHeading: "Delivery and payment details",
    shipping: "Shipping", shippingText: "Orders are made, packed and delivered in around 5-6 days depending on location.", payment: "Payment", paymentText: "Customers can choose Cash on Delivery, GPay, PhonePe or Paytm. No net banking/card form is shown.", freshPacking: "Fresh Packing", freshPackingText: "Every order is packed carefully to keep papad crisp, clean and ready for daily use.",
    footerText: "Fresh homemade papad from Gwalior with authentic Indian taste.", contact: "Contact", quickLinks: "Quick Links", shop: "Shop", about: "About",
    yourCart: "Your Cart", subtotal: "Subtotal", deliveryCharges: "Delivery Charges", total: "Total", deliveryNote: "Estimated total making + delivery time: <b>5-6 days</b>.", placeOrder: "Place Order",
    checkStatus: "Check status", trackHelp: "Order ID or mobile number se status dekhein.", track: "Track", trackPlaceholder: "Order ID / mobile",
    placeYourOrder: "Place your order", name: "Name", mobile: "Mobile", emailOptional: "Email optional", pincode: "Pincode", city: "City", state: "State", deliveryAddress: "Delivery Address", deliveryTime: "Delivery Time", deliveryTimeValue: "5-6 days total", specialOptional: "Special Instructions optional", placeWhatsapp: "Place Order on WhatsApp", paymentAppHelp: "Your selected payment app will open automatically. On desktop or unsupported browsers, use Pay Now.", payNow: "Pay Now", orderSummary: "Order Summary", summaryNote: "Selected taste/ingredients cart items ke saath WhatsApp message me jayenge.",
    namePlaceholder: "Your full name", mobilePlaceholder: "10 digit mobile number", emailPlaceholder: "you@example.com", pincodePlaceholder: "Enter 6 digit pincode", cityPlaceholder: "Auto-filled city", statePlaceholder: "Auto-filled state", addressPlaceholder: "House no, street, area, landmark", specialPlaceholder: "Example: gift packing, call before delivery", pincodeInfo: "City/state will auto-fill after valid pincode. You can edit it if needed.",
    orderSaved: "Order Saved", thankYou: "Thank you! Your order is placed.", trackingIdIs: "Your tracking ID is:", successNote: "Please save this ID. You can check status from the Track Order button. Delivery + making time: 5-6 days.", trackThisOrder: "Track This Order", openWhatsapp: "Open WhatsApp",
    addToCart: "Add to Cart", remove: "Remove", free: "Free", cartEmpty: "Cart is empty. Add products from shop.", noProducts: "No products found.", shelfLife: "Shelf life: 4 months", taste: "Taste", regularTaste: "Regular taste", normalIngredients: "Normal ingredients",
    orderNotFound: "Order not found", checkOrderAgain: "Please check your Order ID/mobile number, or contact us on WhatsApp.", currentStatus: "Current Status", customer: "Customer",
    statuses: ["Order Placed", "Confirmed", "Packed", "Shipped", "Out for Delivery", "Delivered"]
  },
  hi: {
    topStrip: "ताज़ा घर का पापड़ • WhatsApp ऑर्डर उपलब्ध • COD उपलब्ध",
    brandSub: "ग्वालियर से",
    trackOrder: "ऑर्डर ट्रैक करें", cart: "कार्ट", heroEyebrow: "पारंपरिक • कुरकुरा • प्रीमियम",
    heroTitle: "ताज़ा घर का बना पापड़ आपके घर तक।",
    heroText: "Tanu Papad ग्वालियर स्टाइल ताज़ा, कुरकुरा और स्वादिष्ट पापड़ रोज़ के खाने, स्नैक्स, होटल, दुकान और परिवार के लिए लाता है।",
    shopNow: "अभी खरीदें", orderWhatsapp: "WhatsApp पर ऑर्डर", packSizes: "पैक साइज", days56: "5-6 दिन", madeDelivery: "बनाना + डिलीवरी", custom: "कस्टम", tasteOptions: "स्वाद विकल्प", bestSeller: "बेस्ट सेलर", heroBestSeller: "फैमिली कॉम्बो पैक ₹399",
    onlineShop: "ऑनलाइन शॉप", freshPacks: "ताज़ा पापड़ पैक", searchPlaceholder: "पापड़ खोजें...",
    aboutTitle: "Tanu Papad के बारे में", aboutHeading: "ग्वालियर की पहचान वाला लोकल स्वाद।", aboutText: "Tanu Papad उन घरों के लिए है जिन्हें सादा, कुरकुरा और पारंपरिक स्वाद पसंद है। हम ताज़ी पैकिंग, साफ handling और रोज़ के भारतीय खाने के लिए अच्छे स्वाद पर ध्यान देते हैं।",
    aboutLi1: "पारंपरिक रेसिपी और कुरकुरा टेक्सचर", aboutLi2: "हर बैच की ताज़ी पैकिंग", aboutLi3: "घर, दुकान, होटल और इवेंट के लिए उपलब्ध",
    reviewsTitle: "ग्राहक रिव्यू", reviewsHeading: "भरोसा बढ़ाने वाले टेस्टिमोनियल", infoTitle: "ग्राहक जानकारी", infoHeading: "डिलीवरी और पेमेंट जानकारी",
    shipping: "शिपिंग", shippingText: "ऑर्डर लोकेशन के अनुसार लगभग 5-6 दिन में बनाकर, पैक करके डिलीवर किया जाता है।", payment: "पेमेंट", paymentText: "ग्राहक Cash on Delivery, GPay, PhonePe या Paytm चुन सकते हैं। Net banking/card form नहीं है।", freshPacking: "ताज़ी पैकिंग", freshPackingText: "हर ऑर्डर को सावधानी से पैक किया जाता है ताकि पापड़ कुरकुरा, साफ और इस्तेमाल के लिए तैयार रहे।",
    footerText: "ग्वालियर से ताज़ा घर का पापड़, असली भारतीय स्वाद के साथ।", contact: "संपर्क", quickLinks: "क्विक लिंक", shop: "शॉप", about: "अबाउट",
    yourCart: "आपका कार्ट", subtotal: "सबटोटल", deliveryCharges: "डिलीवरी चार्ज", total: "कुल", deliveryNote: "बनाने + डिलीवरी का अनुमानित समय: <b>5-6 दिन</b>.", placeOrder: "ऑर्डर करें",
    checkStatus: "स्टेटस देखें", trackHelp: "ऑर्डर ID या मोबाइल नंबर से स्टेटस देखें।", track: "ट्रैक", trackPlaceholder: "ऑर्डर ID / मोबाइल",
    placeYourOrder: "अपना ऑर्डर करें", name: "नाम", mobile: "मोबाइल", emailOptional: "ईमेल वैकल्पिक", pincode: "पिनकोड", city: "शहर", state: "राज्य", deliveryAddress: "डिलीवरी एड्रेस", deliveryTime: "डिलीवरी समय", deliveryTimeValue: "कुल 5-6 दिन", specialOptional: "विशेष निर्देश वैकल्पिक", placeWhatsapp: "WhatsApp पर ऑर्डर करें", paymentAppHelp: "आपका चुना हुआ payment app अपने आप खुलेगा। Desktop/support न होने पर Pay Now दबाएं।", payNow: "Pay Now", orderSummary: "ऑर्डर सारांश", summaryNote: "चुना हुआ स्वाद/ingredients WhatsApp मैसेज में जाएगा।",
    namePlaceholder: "अपना पूरा नाम", mobilePlaceholder: "10 अंकों का मोबाइल नंबर", emailPlaceholder: "you@example.com", pincodePlaceholder: "6 अंकों का पिनकोड", cityPlaceholder: "शहर अपने आप भरेगा", statePlaceholder: "राज्य अपने आप भरेगा", addressPlaceholder: "मकान नंबर, गली, एरिया, लैंडमार्क", specialPlaceholder: "जैसे: गिफ्ट पैकिंग, डिलीवरी से पहले कॉल", pincodeInfo: "सही पिनकोड डालने पर शहर/राज्य अपने आप भर जाएगा। जरूरत हो तो आप बदल सकते हैं।",
    orderSaved: "ऑर्डर सेव हो गया", thankYou: "धन्यवाद! आपका ऑर्डर प्लेस हो गया।", trackingIdIs: "आपकी ट्रैकिंग ID है:", successNote: "इस ID को सेव कर लीजिए। Track Order button से स्टेटस देख सकते हैं। डिलीवरी + बनाने का समय: 5-6 दिन।", trackThisOrder: "यह ऑर्डर ट्रैक करें", openWhatsapp: "WhatsApp खोलें",
    addToCart: "कार्ट में जोड़ें", remove: "हटाएं", free: "फ्री", cartEmpty: "कार्ट खाली है। शॉप से प्रोडक्ट जोड़ें।", noProducts: "कोई प्रोडक्ट नहीं मिला।", shelfLife: "शेल्फ लाइफ: 4 महीने", taste: "स्वाद", regularTaste: "रेगुलर स्वाद", normalIngredients: "नॉर्मल ingredients",
    orderNotFound: "ऑर्डर नहीं मिला", checkOrderAgain: "कृपया Order ID/mobile number चेक करें, या WhatsApp पर संपर्क करें।", currentStatus: "मौजूदा स्टेटस", customer: "ग्राहक",
    statuses: ["ऑर्डर प्लेस", "कन्फर्म", "पैक्ड", "शिप्ड", "डिलीवरी के लिए निकला", "डिलीवर"]
  }
};
let currentLanguage = localStorage.getItem("tanuPapadLanguage") || "en";
function tr(key) { return (i18n[currentLanguage] && i18n[currentLanguage][key]) || i18n.en[key] || key; }
function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  const languageToggle = document.getElementById("languageToggle");
  if (languageToggle) languageToggle.textContent = currentLanguage === "en" ? "हिंदी" : "English";
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = tr(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = tr(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-placeholder]").forEach((el) => { el.placeholder = tr(el.dataset.placeholder); });
  document.querySelectorAll("[data-value]").forEach((el) => { el.value = tr(el.dataset.value); });
  const cartBtn = document.getElementById("openCartBtn");
  if (cartBtn) cartBtn.childNodes[0].textContent = tr("cart") + " ";
  updateSelectText();
  renderProducts();
  renderCart();
  updatePaymentInfo();
}
function updateSelectText() {
  const categoryLabels = currentLanguage === "hi" ? ["सभी प्रोडक्ट", "क्लासिक", "मसाला", "राइस", "कॉम्बो"] : ["All products", "Classic", "Masala", "Rice", "Combo"];
  document.querySelectorAll("#categoryFilter option").forEach((option, index) => { if (categoryLabels[index]) option.textContent = categoryLabels[index]; });
  const tasteLabels = currentLanguage === "hi" ? ["रेगुलर स्वाद", "हल्का तीखा", "मीडियम तीखा", "ज्यादा तीखा", "कम नमक"] : ["Regular taste", "Mild spicy", "Medium spicy", "Extra spicy", "Less salt"];
  document.querySelectorAll("#globalTaste option").forEach((option, index) => { if (tasteLabels[index]) option.textContent = tasteLabels[index]; });
  const ingredientLabels = currentLanguage === "hi" ? ["नॉर्मल ingredients", "कम मिर्च", "ज्यादा अजवाइन", "कम नमक", "एक्स्ट्रा मसाला"] : ["Normal ingredients", "No extra chilli", "More ajwain", "Less salt", "Extra masala"];
  document.querySelectorAll("#globalIngredient option").forEach((option, index) => { if (ingredientLabels[index]) option.textContent = ingredientLabels[index]; });
  const paymentLabels = currentLanguage === "hi" ? ["कैश ऑन डिलीवरी", "GPay", "PhonePe", "Paytm"] : ["Cash on Delivery", "GPay", "PhonePe", "Paytm"];
  document.querySelectorAll("#paymentMethod option").forEach((option, index) => { if (paymentLabels[index]) option.textContent = paymentLabels[index]; });
}


const defaultProducts = [
  {
    id: "urad-250",
    name: "Urad Papad",
    nameHi: "उड़द पापड़",
    category: "Classic",
    price: 130,
    pack: "250g",
    tag: "Classic",
    tagHi: "क्लासिक",
    desc: "Traditional crispy urad papad for daily meals.",
    descHi: "रोज़ के खाने के लिए पारंपरिक कुरकुरा उड़द पापड़.",
    taste: "Medium",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Urad%20Indian%20Papad.jpg"
  },
  {
    id: "masala-250",
    name: "Masala Papad",
    nameHi: "मसाला पापड़",
    category: "Spicy",
    price: 140,
    pack: "250g",
    tag: "Spicy",
    tagHi: "चटपटा",
    desc: "Chatpata papad for snacks and party starters.",
    descHi: "स्नैक्स और पार्टी स्टार्टर के लिए चटपटा पापड़.",
    taste: "Spicy",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Onion%20Masala%20Papad.jpg"
  },
  {
    id: "rice-250",
    name: "Rice Papad",
    nameHi: "चावल पापड़",
    category: "Light",
    price: 120,
    pack: "250g",
    tag: "Light",
    tagHi: "लाइट",
    desc: "Light and crunchy rice papad for all age groups.",
    descHi: "हर उम्र के लिए हल्का और कुरकुरा चावल पापड़.",
    taste: "Mild",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rice%20papad.jpg"
  },
  {
    id: "jeera-250",
    name: "Jeera Papad",
    nameHi: "जीरा पापड़",
    category: "Classic",
    price: 135,
    pack: "250g",
    tag: "Aromatic",
    tagHi: "सुगंधित",
    desc: "Jeera flavour with simple homemade taste.",
    descHi: "सादे घर जैसे स्वाद के साथ जीरा फ्लेवर.",
    taste: "Mild",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20papadums.jpg"
  },
  {
    id: "family-combo",
    name: "Family Combo Pack",
    nameHi: "फैमिली कॉम्बो पैक",
    category: "Combo",
    price: 399,
    pack: "3 packs",
    tag: "Best Value",
    tagHi: "बेस्ट वैल्यू",
    desc: "Urad, masala and rice papad combo for families.",
    descHi: "परिवार के लिए उड़द, मसाला और चावल पापड़ कॉम्बो.",
    taste: "Mixed",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20papadums.jpg"
  }
 ];

let products = JSON.parse(localStorage.getItem("tanuPapadProducts") || "null") || defaultProducts;
products = products.filter((product) => product.category !== "Bulk" && product.id !== "bulk-5kg");
const defaultIds = new Set(defaultProducts.map((product) => product.id));
if (!localStorage.getItem("tanuPapadProducts") || products.some((product) => !defaultIds.has(product.id)) || products.some((product) => !product.nameHi)) {
  products = defaultProducts;
  localStorage.setItem("tanuPapadProducts", JSON.stringify(defaultProducts));
}
let cart = JSON.parse(localStorage.getItem("tanuPapadCart") || "[]").filter((item) => item.id !== "bulk-5kg");
localStorage.setItem("tanuPapadCart", JSON.stringify(cart));

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartDelivery = document.getElementById("cartDelivery");
const summaryItems = document.getElementById("summaryItems");
const subtotalEl = document.getElementById("subtotal");
const deliveryFeeEl = document.getElementById("deliveryFee");
const discountEl = document.getElementById("discount");
const grandTotalEl = document.getElementById("grandTotal");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const globalTaste = document.getElementById("globalTaste");
const globalIngredient = document.getElementById("globalIngredient");

function money(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function saveCart() {
  localStorage.setItem("tanuPapadCart", JSON.stringify(cart));
}

function renderProducts() {
  const category = categoryFilter.value;
  const search = searchInput.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const categoryMatch = category === "All" || product.category === category;
    const searchMatch = product.name.toLowerCase().includes(search) || (product.nameHi || "").toLowerCase().includes(search) || product.desc.toLowerCase().includes(search) || (product.descHi || "").toLowerCase().includes(search) || product.category.toLowerCase().includes(search);
    return categoryMatch && searchMatch;
  });

  productGrid.innerHTML = filtered.map((product) => {
    const name = currentLanguage === "hi" ? (product.nameHi || product.name) : product.name;
    const tag = currentLanguage === "hi" ? (product.tagHi || product.tag) : product.tag;
    const desc = currentLanguage === "hi" ? (product.descHi || product.desc) : product.desc;
    return `
    <article class="product-card">
      <img src="${product.image}" alt="${name}" />
      <div class="product-info">
        <div class="product-meta"><span>${tag}</span><span>${product.pack}</span></div>
        <h3>${name}</h3>
        <p>${desc}</p>
        <small>${tr("taste")}: ${product.taste} • ${tr("shelfLife")}</small>
        <div class="product-foot">
          <span class="price">${money(product.price)}</span>
          <button type="button" onclick="addToCart('${product.id}')">${tr("addToCart")}</button>
        </div>
      </div>
    </article>`;
  }).join("") || `<div class="empty">${tr("noProducts")}</div>`;
}

function makeCartKey(id, custom) {
  return id + "__" + custom.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function addToCart(id) {
  const taste = globalTaste ? globalTaste.value : "Regular taste";
  const ingredient = globalIngredient ? globalIngredient.value : "Normal ingredients";
  const custom = taste + " / " + ingredient;
  const key = makeCartKey(id, custom);
  const item = cart.find((entry) => entry.key === key);
  if (item) item.qty += 1;
  else cart.push({ key, id, qty: 1, custom, taste, ingredient });
  saveCart();
  renderCart();
  openCart();
}

function updateQty(key, change) {
  cart = cart.map((item) => (item.key || makeCartKey(item.id, item.custom || "Regular taste")) === key ? { ...item, qty: item.qty + change } : item).filter((item) => item.qty > 0);
  saveCart();
  renderCart();
}

function removeItem(key) {
  cart = cart.filter((item) => (item.key || makeCartKey(item.id, item.custom || "Regular taste")) !== key);
  saveCart();
  renderCart();
}

function getCartDetails() {
  return cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    const custom = item.custom || "Regular taste";
    const key = item.key || makeCartKey(item.id, custom);
    return { ...product, key, custom, displayName: currentLanguage === "hi" ? (product.nameHi || product.name) : product.name, qty: item.qty, lineTotal: product.price * item.qty };
  }).filter((item) => item.id);
}

function calculateTotals() {
  const details = getCartDetails();
  const subtotal = details.reduce((sum, item) => sum + item.lineTotal, 0);
  const delivery = subtotal === 0 || subtotal >= 499 ? 0 : 49;
  const total = Math.max(subtotal + delivery, 0);
  return { details, subtotal, delivery, discount: 0, total };
}

function renderCart() {
  const details = getCartDetails();
  const count = details.reduce((sum, item) => sum + item.qty, 0);
  const totals = calculateTotals();
  cartCount.textContent = count;
  if (cartSubtotal) cartSubtotal.textContent = money(totals.subtotal);
  if (cartDelivery) cartDelivery.textContent = totals.delivery === 0 ? tr("free") : money(totals.delivery);
  cartTotal.textContent = money(totals.total);

  cartItems.innerHTML = details.length ? details.map((item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <h4>${item.displayName}</h4>
        <small>${item.pack} • ${money(item.price)} • ${item.custom}</small>
        <div class="cart-row">
          <span class="qty">
            <button type="button" onclick="updateQty('${item.key}', -1)">−</button>
            <b>${item.qty}</b>
            <button type="button" onclick="updateQty('${item.key}', 1)">+</button>
          </span>
          <button class="remove-btn" type="button" onclick="removeItem('${item.key}')">${tr("remove")}</button>
        </div>
      </div>
    </div>
  `).join("") : `<div class="empty">${tr("cartEmpty")}</div>`;

  renderSummary();
}

function renderSummary() {
  const totals = calculateTotals();
  summaryItems.innerHTML = totals.details.length ? totals.details.map((item) => `
    <div class="summary-item">
      <span>${item.displayName}<small>${item.pack} × ${item.qty} • ${item.custom}</small></span>
      <b>${money(item.lineTotal)}</b>
    </div>
  `).join("") : `<div class="empty">${currentLanguage === "hi" ? "कोई आइटम नहीं चुना गया।" : "No items selected."}</div>`;
  subtotalEl.textContent = money(totals.subtotal);
  deliveryFeeEl.textContent = totals.delivery === 0 ? tr("free") : money(totals.delivery);
  if (discountEl) discountEl.textContent = "-" + money(totals.discount);
  grandTotalEl.textContent = money(totals.total);
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

document.getElementById("openCartBtn").addEventListener("click", openCart);
const headerTrackBtn = document.getElementById("headerTrackBtn");
function openTrackModal(prefill = "") {
  closeCart();
  closeCheckout();
  const modal = document.getElementById("trackModal");
  const input = document.getElementById("mainTrackInput");
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  if (input) {
    input.value = prefill || input.value || "";
    setTimeout(() => input.focus(), 120);
  }
  if (prefill) handleTrackSubmit("mainTrackInput", "mainTrackResult");
}
function closeTrackModal() {
  const modal = document.getElementById("trackModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
if (headerTrackBtn) {
  headerTrackBtn.addEventListener("click", () => openTrackModal());
}
const closeTrackBtn = document.getElementById("closeTrackBtn");
if (closeTrackBtn) closeTrackBtn.addEventListener("click", closeTrackModal);
const trackModal = document.getElementById("trackModal");
if (trackModal) {
  trackModal.addEventListener("click", (event) => {
    if (event.target === trackModal) closeTrackModal();
  });
}
document.getElementById("closeCartBtn").addEventListener("click", closeCart);
cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCart();
});

const pincodeInput = document.getElementById("customerPincode");
const cityInput = document.getElementById("customerCity");
const stateInput = document.getElementById("customerState");
const pincodeStatus = document.getElementById("pincodeStatus");
let lastFetchedPincode = "";

function setPincodeStatus(message, type = "info") {
  if (!pincodeStatus) return;
  pincodeStatus.textContent = message;
  pincodeStatus.className = "pincode-status " + type;
}

async function fetchCityByPincode() {
  if (!pincodeInput || !cityInput || !stateInput) return;
  const pin = pincodeInput.value.replace(/\D/g, "").slice(0, 6);
  pincodeInput.value = pin;

  if (pin.length < 6) {
    lastFetchedPincode = "";
    setPincodeStatus(currentLanguage === "hi" ? "शहर और राज्य भरने के लिए 6 अंकों का पिनकोड डालें।" : "Enter 6 digit pincode to auto-fill city and state.", "info");
    return;
  }

  if (pin === lastFetchedPincode) return;
  lastFetchedPincode = pin;
  setPincodeStatus(currentLanguage === "hi" ? "शहर और राज्य ला रहे हैं..." : "Fetching city and state...", "loading");

  try {
    const response = await fetch("https://api.postalpincode.in/pincode/" + pin);
    const data = await response.json();
    const first = data && data[0];
    const office = first && first.PostOffice && first.PostOffice[0];

    if (first && first.Status === "Success" && office) {
      cityInput.value = office.District || office.Name || "";
      stateInput.value = office.State || "";
      setPincodeStatus(currentLanguage === "hi" ? "शहर/राज्य अपने आप भर गया। ऑर्डर से पहले चेक कर लें।" : "City/state filled automatically. Please verify before placing order.", "success");
    } else {
      cityInput.value = "";
      stateInput.value = "";
      setPincodeStatus(currentLanguage === "hi" ? "पिनकोड नहीं मिला। कृपया शहर और राज्य खुद भरें।" : "Pincode not found. Please enter city and state manually.", "error");
    }
  } catch (error) {
    setPincodeStatus(currentLanguage === "hi" ? "शहर/राज्य अपने आप नहीं मिला। कृपया खुद भरें।" : "Could not auto-fetch city/state. Please enter manually.", "error");
  }
}

if (pincodeInput) {
  pincodeInput.addEventListener("input", fetchCityByPincode);
  pincodeInput.addEventListener("blur", fetchCityByPincode);
}

const customerMobileInput = document.getElementById("customerMobile");
if (customerMobileInput) {
  customerMobileInput.setAttribute("maxlength", "10");
  customerMobileInput.setAttribute("pattern", "[0-9]{10}");
  customerMobileInput.addEventListener("input", () => {
    customerMobileInput.value = customerMobileInput.value.replace(/\D/g, "").slice(0, 10);
  });
}

function openCheckout() {
  const totals = calculateTotals();
  if (!totals.details.length) {
    alert(currentLanguage === "hi" ? "कृपया पहले कार्ट में प्रोडक्ट जोड़ें।" : "Please add at least one product to cart.");
    return;
  }
  closeCart();
  renderSummary();
  const modal = document.getElementById("checkoutModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}
function closeCheckout() {
  const modal = document.getElementById("checkoutModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
document.getElementById("closeCheckoutBtn").addEventListener("click", closeCheckout);
document.getElementById("checkoutModal").addEventListener("click", (event) => {
  if (event.target.id === "checkoutModal") closeCheckout();
});


categoryFilter.addEventListener("change", renderProducts);
searchInput.addEventListener("input", renderProducts);
globalTaste.addEventListener("change", renderProducts);
globalIngredient.addEventListener("change", renderProducts);


const paymentMethodSelect = document.getElementById("paymentMethod");
const paymentInfoBox = document.getElementById("paymentInfoBox");
function getUpiPayLink(appName = "UPI") {
  const totals = calculateTotals();
  const amount = Math.max(totals.total || 0, 0).toFixed(2);
  const note = encodeURIComponent("Tanu Papad Order");
  const pa = encodeURIComponent(BUSINESS_UPI_ID);
  const pn = encodeURIComponent(BUSINESS_NAME);
  const query = `pa=${pa}&pn=${pn}&am=${amount}&cu=INR&tn=${note}`;
  if (appName === "GPay") return `tez://upi/pay?${query}`;
  if (appName === "PhonePe") return `phonepe://pay?${query}`;
  if (appName === "Paytm") return `paytmmp://upi/pay?${query}`;
  return `upi://pay?${query}`;
}

function redirectToPaymentApp(appName) {
  if (!["GPay", "PhonePe", "Paytm"].includes(appName)) return;
  const link = getUpiPayLink(appName);
  setTimeout(() => { window.location.href = link; }, 150);
}

function updatePaymentInfo() {
  if (!paymentMethodSelect || !paymentInfoBox) return;
  const value = paymentMethodSelect.value;
  if (["GPay", "PhonePe", "Paytm"].includes(value)) {
    paymentInfoBox.style.display = "block";
    paymentInfoBox.innerHTML = `
      <small>${tr("paymentAppHelp")}</small>
      <a href="${getUpiPayLink(value)}" class="upi-app-btn single-pay-btn">${tr("payNow")} - ${value}</a>
    `;
  } else {
    paymentInfoBox.style.display = "none";
    paymentInfoBox.innerHTML = "";
  }
}
if (paymentMethodSelect) paymentMethodSelect.addEventListener("change", () => {
  updatePaymentInfo();
  redirectToPaymentApp(paymentMethodSelect.value);
});
updatePaymentInfo();

document.getElementById("checkoutForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const totals = calculateTotals();
  if (!totals.details.length) {
    openCart();
    alert(currentLanguage === "hi" ? "कृपया पहले कार्ट में प्रोडक्ट जोड़ें।" : "Please add at least one product to cart.");
    return;
  }

  const orderId = "TP" + Date.now().toString().slice(-6);
  const name = document.getElementById("customerName").value.trim();
  const mobile = document.getElementById("customerMobile").value.replace(/\D/g, "").trim();
  const mobileInput = document.getElementById("customerMobile");
  if (!/^\d{10}$/.test(mobile)) {
    alert(currentLanguage === "hi" ? "कृपया सही 10 अंकों का मोबाइल नंबर डालें।" : "Please enter a valid 10 digit mobile number.");
    if (mobileInput) mobileInput.focus();
    return;
  }
  if (mobileInput) mobileInput.value = mobile;
  const email = document.getElementById("customerEmail").value.trim();
  const pincode = document.getElementById("customerPincode").value.trim();
  const city = document.getElementById("customerCity").value.trim();
  const state = document.getElementById("customerState").value.trim();
  const addressLine = document.getElementById("customerAddress").value.trim();
  const fullAddress = [addressLine, city, state, pincode].filter(Boolean).join(", ");
  const payment = document.getElementById("paymentMethod").value;
  const specialNote = document.getElementById("specialNote").value.trim();
  const itemsText = totals.details.map((item) => `- ${item.name} (${item.pack}) x ${item.qty} [${item.custom}] = ${money(item.lineTotal)}`).join("\n");

  const message = [
    "Hello Tanu Papad,",
    "",
    "I want to place an order.",
    "Order ID: " + orderId,
    "",
    "Items:",
    itemsText,
    "",
    "Subtotal: " + money(totals.subtotal),
    "Delivery: " + (totals.delivery === 0 ? tr("free") : money(totals.delivery)),
    "Total: " + money(totals.total),
    "",
    "Customer Details:",
    "Name: " + name,
    "Mobile: " + mobile,
    "Email: " + (email || "Not provided"),
    "Payment: " + payment,
    "Payment App: " + payment,
    "Merchant UPI ID: " + BUSINESS_UPI_ID,
    "Item Customization: " + totals.details.map((item) => item.name + " - " + item.custom).join("; "),
    "Delivery Time: 5-6 days total for making and delivery",
    "Special Instructions: " + (specialNote || "None"),
    "Address: " + fullAddress
  ].join("\n");

  const order = {
    orderId,
    createdAt: new Date().toISOString(),
    name,
    mobile,
    email,
    address: fullAddress,
    pincode,
    city,
    state,
    payment,
    merchantUpiId: BUSINESS_UPI_ID,
    customization: totals.details.map((item) => item.name + " - " + item.custom).join("; "),
    specialNote,
    items: totals.details.map((item) => ({
      id: item.id,
      name: item.name,
      pack: item.pack,
      price: item.price,
      qty: item.qty,
      custom: item.custom,
      lineTotal: item.lineTotal
    })),
    subtotal: totals.subtotal,
    delivery: totals.delivery,
    discount: totals.discount,
    total: totals.total,
    status: "Order Placed",
    note: "Order received. Admin will confirm soon."
  };

  const orders = JSON.parse(localStorage.getItem("tanuPapadOrders") || "[]");
  orders.unshift(order);
  localStorage.setItem("tanuPapadOrders", JSON.stringify(orders));
  localStorage.setItem("lastTanuPapadOrder", JSON.stringify({ orderId, mobile, total: totals.total }));
  cart = [];
  saveCart();
  renderCart();

  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
  closeCheckout();
  showOrderSuccess(orderId, mobile);
});

function showOrderSuccess(orderId, mobile) {
  const successModal = document.getElementById("orderSuccessModal");
  const successOrderId = document.getElementById("successOrderId");
  if (!successModal || !successOrderId) {
    alert("Order saved. Your Tracking ID is " + orderId + ".");
    return;
  }
  successOrderId.textContent = orderId;
  successModal.dataset.mobile = mobile || "";
  successModal.classList.add("open");
  successModal.setAttribute("aria-hidden", "false");
}

function closeOrderSuccess() {
  const successModal = document.getElementById("orderSuccessModal");
  if (!successModal) return;
  successModal.classList.remove("open");
  successModal.setAttribute("aria-hidden", "true");
}

const closeSuccessBtn = document.getElementById("closeSuccessBtn");
if (closeSuccessBtn) closeSuccessBtn.addEventListener("click", closeOrderSuccess);
const successTrackBtn = document.getElementById("successTrackBtn");
if (successTrackBtn) {
  successTrackBtn.addEventListener("click", () => {
    const orderId = document.getElementById("successOrderId")?.textContent || "";
    closeOrderSuccess();
    openTrackModal(orderId);
  });
}
const successModal = document.getElementById("orderSuccessModal");
if (successModal) {
  successModal.addEventListener("click", (event) => {
    if (event.target === successModal) closeOrderSuccess();
  });
}


function renderTrackingResult(order, targetId = "cartTrackResult") {
  const statusKeys = ["Order Placed", "Confirmed", "Packed", "Shipped", "Out for Delivery", "Delivered"];
  const statuses = tr("statuses");
  const currentIndex = Math.max(statusKeys.indexOf(order.status), 0);
  const timeline = document.getElementById(targetId);
  if (!timeline) return;
  timeline.innerHTML = `
    <div class="track-result-card">
      <h3>Order ${order.orderId}</h3>
      <p><b>${tr("customer")}:</b> ${order.name} • <b>${tr("total")}:</b> ${money(order.total)} • <b>${tr("payment")}:</b> ${order.payment}</p>
      <p><b>${tr("currentStatus")}:</b> ${statuses[currentIndex] || order.status}</p>
      <div class="track-steps">
        ${statuses.map((status, index) => `<span class="${index <= currentIndex ? "done" : ""}">${index <= currentIndex ? "✓" : "○"} ${status}</span>`).join("")}
      </div>
      <p class="muted">${order.note || "Status updated by admin."}</p>
    </div>
  `;
}

function handleTrackSubmit(inputId, resultId) {
  const search = document.getElementById(inputId).value.trim().toLowerCase();
  const orders = JSON.parse(localStorage.getItem("tanuPapadOrders") || "[]");
  const order = orders.find((entry) =>
    entry.orderId.toLowerCase() === search ||
    entry.mobile.toLowerCase() === search
  );

  if (order) {
    renderTrackingResult(order, resultId);
  } else {
    const last = JSON.parse(localStorage.getItem("lastTanuPapadOrder") || "null");
    if (last && (last.orderId.toLowerCase() === search || last.mobile.toLowerCase() === search)) {
      renderTrackingResult({
        orderId: last.orderId,
        name: currentLanguage === "hi" ? "ग्राहक" : "Customer",
        total: last.total,
        payment: "As selected",
        status: "Order Placed",
        note: currentLanguage === "hi" ? "यह आपका पिछला सेव ऑर्डर है। डिलीवरी का समय लगभग 5-6 दिन है।" : "This is your last saved order. Delivery time is around 5-6 days."
      }, resultId);
      return;
    }
    const box = document.getElementById(resultId);
    box.innerHTML = `<div class="track-result-card"><h3>${tr("orderNotFound")}</h3><p>${tr("checkOrderAgain")}</p></div>`;
  }
}

const mainTrackForm = document.getElementById("mainTrackForm");
if (mainTrackForm) {
  mainTrackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleTrackSubmit("mainTrackInput", "mainTrackResult");
  });
}

const languageToggleBtn = document.getElementById("languageToggle");
if (languageToggleBtn) {
  languageToggleBtn.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "hi" : "en";
    localStorage.setItem("tanuPapadLanguage", currentLanguage);
    applyLanguage();
  });
}

applyLanguage();
