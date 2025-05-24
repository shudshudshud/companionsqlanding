// Main JavaScript - Component loader and common functions

document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer components
    loadComponents();
    
    // Update copyright year
    updateCopyrightYear();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
});

// Load header and footer components
async function loadComponents() {
    try {
        // Load header
        const headerResponse = await fetch('components/header.html');
        const headerHTML = await headerResponse.text();
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerHTML;
            
            // Initialize navigation after header loads
            if (typeof initNavigation === 'function') {
                initNavigation();
            }
        }
        
        // Load footer
        const footerResponse = await fetch('components/footer.html');
        const footerHTML = await footerResponse.text();
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHTML;
            
            // Update copyright year in footer
            updateCopyrightYear();
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Update copyright year
function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => el.textContent = currentYear);
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a[href^="#"]');
        if (target) {
            e.preventDefault();
            const targetId = target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

// Track waitlist clicks (optional analytics)
document.addEventListener('click', function(e) {
    if (e.target.closest('a[href*="sibforms.com"]')) {
        console.log('Waitlist signup clicked');
        // Add your analytics tracking here if needed
    }
});