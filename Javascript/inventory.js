document.getElementById("inventoryForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const productName = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;
  
    await fetch("http://localhost:5000/api/inventory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productName, quantity })
    });
  
    loadInventory();
  });
  
  async function loadInventory() {
    const inventoryData = await fetch("http://localhost:5000/api/inventory");
    const inventoryItems = await inventoryData.json();
    const inventoryList = document.getElementById("inventoryList");
  
    inventoryList.innerHTML = "";
    inventoryItems.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.productName} - ${item.quantity}`;
      inventoryList.appendChild(listItem);
    });
  }
  
  document.addEventListener("DOMContentLoaded", loadInventory);

async function loadInventory() {
  const inventoryData = await fetch("http://localhost:5000/api/inventory");
  const inventoryItems = await inventoryData.json();
  const inventoryList = document.getElementById("inventoryList");

  inventoryList.innerHTML = ""; // Clear existing list
  inventoryItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${item.productName}</strong> - Quantity: ${item.quantity} 
      <button onclick="editInventoryItem(${item.id}, '${item.productName}', ${item.quantity})">Edit</button>
      <button onclick="deleteInventoryItem(${item.id})">Delete</button>
    `;
    inventoryList.appendChild(listItem);
  });
}

async function editInventoryItem(id, currentName, currentQuantity) {
  const newName = prompt("Edit product name:", currentName);
  const newQuantity = prompt("Edit quantity:", currentQuantity);

  if (newName !== null && newQuantity !== null) {
    await fetch(`http://localhost:5000/api/inventory/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productName: newName, quantity: Number(newQuantity) })
    });
    loadInventory(); // Refresh inventory list
  }
}

async function deleteInventoryItem(id) {
  if (confirm("Are you sure you want to delete this item?")) {
    await fetch(`http://localhost:5000/api/inventory/${id}`, { method: "DELETE" });
    loadInventory();
  }
}
