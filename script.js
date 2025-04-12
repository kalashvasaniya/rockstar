// DOM Elements
const showContent = document.querySelector('.hideSeven');
const hideContent = document.querySelector('.showSeven');

// Animation Timing
const INITIAL_DELAY = 2500;
const TRANSITION_DURATION = 500;

// Utility Functions
function fadeOut(element) {
    if (!element) return;
    element.style.opacity = '0';
    setTimeout(() => {
        element.style.display = 'none';
    }, TRANSITION_DURATION);
}

function fadeIn(element) {
    if (!element) return;
    element.style.display = 'block';
    // Trigger reflow
    element.offsetHeight;
    element.style.opacity = '1';
    element.classList.add('visible');
}

// Main Animation Sequence
function startAnimation() {
    try {
        // Hide initial content
        setTimeout(() => {
            fadeOut(hideContent);
        }, INITIAL_DELAY);

        // Show main content
        setTimeout(() => {
            fadeIn(showContent);
        }, INITIAL_DELAY + TRANSITION_DURATION);
    } catch (error) {
        console.error('Animation error:', error);
        // Fallback: show content immediately if animation fails
        if (showContent) showContent.style.display = 'block';
        if (hideContent) hideContent.style.display = 'none';
    }
}

// Start animation when DOM is loaded
document.addEventListener('DOMContentLoaded', startAnimation);

// Handle visibility change
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        startAnimation();
    }
});