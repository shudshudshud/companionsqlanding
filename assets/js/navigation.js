// Navigation JavaScript - Mobile menu and navigation functionality

function initNavigation() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('site-header');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
    
    // Header scroll effect
    if (header) {
        let lastScroll = 0;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            // Add scrolled class for styling
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // Set active navigation link based on current page
    setActiveNavLink();
}

// Set active navigation link
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.includes(href) || (currentPath === '/' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initNavigation };
}