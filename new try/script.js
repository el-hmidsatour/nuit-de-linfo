/* =========================================
   DYNAMIC NAVBAR LOGIC
   ========================================= */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    // If user scrolls down more than 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});