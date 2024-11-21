document.getElementById("profileForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;
  
    const response = await fetch("http://localhost:5000/api/profile/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, company })
    });
  
    const result = await response.json();
    if (result.success) alert("Profile updated successfully!");
  });
  