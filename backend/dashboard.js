5.	//Advanced JavaScript for Error Handling and Loading States

// For enhanced user experience, add loading indicators and error messages in the frontend.

// Example: Loading State and Error Handling in dashboard.js

Async function loadInsights() {
  Const insightsContainer = document.getElementById(“insights”);
  insightsContainer.innerHTML = “<p>Loading...</p>”;

  try {
    const insightsData = await fetch("http://localhost:5000/api/dashboard/insights");
    if (!insightsData.ok) throw new Error(“Failed to load insights”);
    
    const insights = await insightsData.json();
    insightsContainer.innerHTML = “”;
    insights.forEach(insight => {
      const item = document.createElement(“div”);
      item.textContent = `${insight.title}: ${insight.value}`;
      insightsContainer.appendChild(item);
    });
  } catch (error) {
    insightsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
