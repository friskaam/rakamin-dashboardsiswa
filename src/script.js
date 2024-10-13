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

// sticky header & navbar
let lastScrollTop = 0;
const header = document.getElementById('header');
const nav = document.getElementById('nav');

window.onscroll = function () {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    header.classList.add('translate-y-[-100%]'); 
    navbar.style.transform = 'translateY(100%)'; 
  } else {
    header.classList.remove('translate-y-[-100%]');
    navbar.style.transform = 'translateY(0)';
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
};
