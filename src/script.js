// notif popup toggle
function toggleNotificationPopup() {
    const popup = document.getElementById('notification-popup');
    popup.classList.toggle('hidden');
}

// close notif popup 
window.addEventListener('click', (event) => {
    const notificationButton = document.getElementById('notification-button');
    const notificationPopup = document.getElementById('notification-popup');
    const profilePopup = document.getElementById('profile-popup');

    if (!notificationButton.contains(event.target) && !notificationPopup.contains(event.target)) {
        notificationPopup.classList.add('hidden');
    }
});


// sidebar
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});