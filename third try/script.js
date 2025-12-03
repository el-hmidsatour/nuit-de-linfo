window.addEventListener('load', function() {
    
    // VANTA TRUNK EFFECT
    VANTA.TRUNK({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        spacing: 10.00,
        chaos: 4.00,
        color: 0x983E5F, 
        backgroundColor: 0x4B667C
    })

    // NAVBAR SCROLL EFFECT
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});