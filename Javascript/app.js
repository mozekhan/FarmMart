// Register form submission
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
  
    const response = await fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role })
    });
    const data = await response.json();
    console.log(data);
  });
  
  // Display produce in marketplace
  window.addEventListener('load', async () => {
    const produceList = document.getElementById('produceList');
    const response = await fetch('http://localhost:5000/api/marketplace');
    const produce = await response.json();
    produce.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - ${item.price} USD`;
      produceList.appendChild(listItem);
    });
  });
  
  // Track shipment
  document.getElementById('trackForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const shipmentId = document.getElementById('shipmentId').value;
    const response = await fetch(`http://localhost:5000/api/logistics/${shipmentId}`);
    const data = await response.json();
    document.getElementById('trackingResult').textContent = data.status;
  });
  