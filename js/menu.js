/**
 * Hamburger menu functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const body = document.body;
    
    // Toggle menu open/close
    menuToggle.addEventListener('click', function() {
        body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (body.classList.contains('menu-open') && 
            !e.target.closest('nav.sidebar') && 
            !e.target.closest('#menu-toggle')) {
            body.classList.remove('menu-open');
        }
    });
});
