

const menu = document.getElementById('menu');
const menuToggle = document.querySelector('.menu-toggle');

// Toggle menu visibility
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
    }
});
