// Simulate role (farmer or buyer) - i will Replace this with real authentication
const userRole = "farmer"; // Change to "buyer" to test the buyer interface

// Sample product data
const products = [
  { id: 1, name: "Tomatoes", price: 1000 },
  { id: 2, name: "Potatoes", price: 800 },
];

// DOM Elements
const userRoleSpan = document.getElementById("userRole");
const roleDescription = document.getElementById("roleDescription");
const farmerInterface = document.getElementById("farmerInterface");
const buyerInterface = document.getElementById("buyerInterface");
const farmerProductList = document.getElementById("farmerProductList");
const buyerProductList = document.getElementById("buyerProductList");
const buyProductOptions = document.getElementById("buyProductOptions");

// Set role-specific interface
if (userRole === "farmer") {
  userRoleSpan.textContent = "Farmer";
  farmerInterface.style.display = "block";
  buyerInterface.style.display = "none";
  loadFarmerProducts();
} else if (userRole === "buyer") {
  userRoleSpan.textContent = "Buyer";
  farmerInterface.style.display = "none";
  buyerInterface.style.display = "block";
  loadBuyerProducts();
}

// Load farmer's products
function loadFarmerProducts() {
  farmerProductList.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    farmerProductList.appendChild(li);
  });
}

// Load available products for buyers
function loadBuyerProducts() {
  buyerProductList.innerHTML = "";
  buyProductOptions.innerHTML = "";
  products.forEach((product) => {
    // Populate product list
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    buyerProductList.appendChild(li);

    // Populate product options for modal
    const optionLi = document.createElement("li");
    optionLi.textContent = `${product.name} - $${product.price}`;
    const button = document.createElement("button");
    button.textContent = "Buy";
    button.onclick = () => alert(`Purchased ${product.name} for $${product.price}`);
    optionLi.appendChild(button);
    buyProductOptions.appendChild(optionLi);
  });
}

// Open Add Product Modal
function openAddProductModal() {
  document.getElementById("addProductModal").style.display = "block";
}

// Open Buy Product Modal
function openBuyProductModal() {
  document.getElementById("buyProductModal").style.display = "block";
}

// Close Modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Add new product
document.getElementById("addProductForm").onsubmit = function (e) {
  e.preventDefault();
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  products.push({ id: products.length + 1, name, price: parseFloat(price) });
  alert(`${name} added successfully!`);
  closeModal("addProductModal");
  loadFarmerProducts();
};

