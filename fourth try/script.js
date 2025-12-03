window.addEventListener('load', function() {
    
    // 1. VANTA BACKGROUND
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

    // 2. NAVBAR SCROLL & ACTIVE LINK HIGHLIGHTER
    const navbar = document.getElementById('navbar');
    // Select all sections that we want to track
    const sections = document.querySelectorAll('section');
    // Select all nav links
    const navLinks = document.querySelectorAll('.nav-links ul li a');

    window.addEventListener('scroll', () => {
        let current = '';

        // A. Background transparency logic
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // B. Active Link Logic (Scroll Spy)
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // If we have scrolled down to this section (minus slight offset for visual appeal)
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        // Apply 'active' class to the matching link
        navLinks.forEach(link => {
            link.classList.remove('active');
            // If the link's href includes the current ID, add class active
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});