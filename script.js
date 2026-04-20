// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

// Observe all stat cards and fact boxes
document.querySelectorAll('.stat-card, .fact-box, .info-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Detect when video is playing
const iframe = document.querySelector('iframe');
if (iframe) {
    iframe.addEventListener('load', () => {
        console.log('🐠 Rain\'s stream is ready!');
    });
}

// Easter egg: fish facts in console
console.log('%c🐠 Welcome to Rain\'s Aquarium! 🐠', 'font-size: 20px; color: #0066cc; font-weight: bold;');
console.log('%cDid you know? Betta fish can recognize their owners and have memories up to 3 months long!', 'font-size: 12px; color: #00d9ff;');
console.log('%cRain is a beautiful Siamese Fighting Fish. Thanks for watching!', 'font-size: 12px; color: #00d9ff;');

// Simple particle effect (optional enhancement)
function createBubbles() {
    const body = document.body;
    
    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement('div');
        bubble.style.position = 'fixed';
        bubble.style.width = Math.random() * 20 + 10 + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.backgroundColor = 'rgba(167, 139, 250, 0.3)';
        bubble.style.borderRadius = '50%';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.top = '100vh';
        bubble.style.pointerEvents = 'none';
        bubble.style.zIndex = '0';
        
        body.appendChild(bubble);
        
        // Animate bubbles rising
        const duration = Math.random() * 4 + 6;
        bubble.style.animation = `rise ${duration}s infinite ease-in`;
    }
}

// Add bubble animation to style
const bubbleStyle = document.createElement('style');
bubbleStyle.textContent = `
    @keyframes rise {
        to {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(bubbleStyle);

// Initialize bubbles on page load
window.addEventListener('load', () => {
    createBubbles();
});
