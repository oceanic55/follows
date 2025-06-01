/**
 * Image popup functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    // Create popup elements
    const popup = document.createElement('div');
    popup.className = 'image-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup">&times;</span>
            <img class="popup-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(popup);
    
    // Get popup elements
    const popupImg = popup.querySelector('.popup-image');
    const closeBtn = popup.querySelector('.close-popup');
    
    // Add click event to all images with popup-trigger class
    const popupTriggers = document.querySelectorAll('.popup-trigger');
    popupTriggers.forEach(img => {
        img.addEventListener('click', function() {
            popupImg.src = this.getAttribute('data-full-img') || this.src;
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
        });
    });
    
    // Close popup when clicking the close button
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close popup when clicking outside the image
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
    
    // Close popup when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.style.display === 'flex') {
            popup.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
});
