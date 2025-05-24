// Animations JavaScript - Scroll animations and effects

document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
});

function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Optional: Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation to various elements
    const animatedElements = document.querySelectorAll('.feature-card, .connection-card, .privacy-card, .pricing-card, .process-step, .flow-step');
    
    animatedElements.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        
        // Start observing
        observer.observe(element);
    });
    
    // Add stagger effect for grid items
    const grids = document.querySelectorAll('.features-grid, .connection-grid, .privacy-grid');
    grids.forEach(grid => {
        const items = grid.children;
        Array.from(items).forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });
}

// CSS class for animated elements
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);