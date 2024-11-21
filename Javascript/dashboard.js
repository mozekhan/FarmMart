// Example JavaScript to dynamically load data for the dashboard
document.addEventListener("DOMContentLoaded", () => {
    loadInsights();
    loadRecentOrders();
  });
  
  async function loadInsights() {
    // Simulate fetching insights data from backend API
    const insightsData = await fetch("http://localhost:5000/api/dashboard/insights");
    const insights = await insightsData.json();
    const insightsContainer = document.getElementById("insights");
  
    insights.forEach(insight => {
      const item = document.createElement("div");
      item.textContent = `${insight.title}: ${insight.value}`;
      insightsContainer.appendChild(item);
    });
  }
  
  async function loadRecentOrders() {
    const ordersData = await fetch("http://localhost:5000/api/dashboard/orders");
    const orders = await ordersData.json();
    const ordersContainer = document.getElementById("recentOrders");
  
    orders.forEach(order => {
      const listItem = document.createElement("li");
      listItem.textContent = `Order #${order.id} - ${order.status}`;
      ordersContainer.appendChild(listItem);
    });
  }
  