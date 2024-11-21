// Simulate adding products dynamically for Market Page
document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.querySelector(".product-grid");
  
    // Sample product data
    const products = [
      { id: 1, name: "Fresh Apples", price: "$15/kg", img: "images/apples.jpg" },
      { id: 2, name: "Bananas", price: "$10/kg", img: "images/bananas.jpg" },
      { id: 3, name: "Carrots", price: "$12/kg", img: "images/carrots.jpg" },
    ];
  
    // Add products dynamically
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <button class="action-button">Buy Now</button>
      `;
      productGrid.appendChild(productCard);
    });
  });
  
  // Simulate order interactions
  document.addEventListener("DOMContentLoaded", () => {
    const orderList = document.querySelector(".order-list");
  
    // Sample order data
    const orders = [
      { id: 1, product: "Tomatoes", quantity: "10 kg", status: "Shipped" },
      { id: 2, product: "Carrots", quantity: "5 kg", status: "Delivered" },
    ];
  
    // Add orders dynamically
    orders.forEach((order) => {
      const orderItem = document.createElement("div");
      orderItem.classList.add("order-item");
      orderItem.innerHTML = `
        <h3>Order #${order.id}</h3>
        <p>${order.product}: ${order.quantity}</p>
        <p>Status: ${order.status}</p>
      `;
      orderList.appendChild(orderItem);
    });
  });
  