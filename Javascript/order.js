document.addEventListener("DOMContentLoaded", loadOrders);

async function loadOrders() {
  const ordersData = await fetch("http://localhost:5000/api/orders");
  const orders = await ordersData.json();
  const orderList = document.getElementById("orderList");

  orders.forEach(order => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      Order ID: ${order.id}<br>
      Status: ${order.status}<br>
      <button onclick="updateOrderStatus(${order.id})">Update Status</button>
    `;
    orderList.appendChild(listItem);
  });
}

async function updateOrderStatus(orderId) {
  // Update order status logic
  await fetch(`http://localhost:5000/api/orders/${orderId}`, { method: "PUT" });
  alert("Order status updated!");
  loadOrders();
}
