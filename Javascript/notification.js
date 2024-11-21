document.addEventListener("DOMContentLoaded", loadNotifications);

async function loadNotifications() {
  const notificationsData = await fetch("http://localhost:5000/api/notifications");
  const notifications = await notificationsData.json();
  const notificationList = document.getElementById("notificationList");

  notificationList.innerHTML = ""; // Clear existing list
  notifications.forEach(notification => {
    const listItem = document.createElement("li");
    listItem.textContent = notification.message;
    notificationList.appendChild(listItem);
  });
}
