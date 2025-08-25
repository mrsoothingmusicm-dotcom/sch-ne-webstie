// Modal functionality
const modal = document.getElementById('love-modal');
const btn = document.querySelector('.romantic-btn');
const span = document.getElementsByClassName('close')[0];

// Show modal when button is clicked
function showLove() {
    modal.style.display = 'block';
    createHeartBurst();
}

// Close modal when X is clicked
span.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Animated counters
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Start counter animations when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        animateCounter(document.getElementById('heartbeats'), 999999);
        animateCounter(document.getElementById('smiles'), 888888);
        animateCounter(document.getElementById('kisses'), 777777);
    }, 1000);
});

// Create heart burst effect
function createHeartBurst() {
    const container = document.body;
    const heartCount = 20;
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'fixed';
            heart.style.fontSize = '2rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.animation = 'heartBurst 3s ease-out forwards';
            
            container.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 100);
    }
}

// Add heart burst animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes heartBurst {
        0% {
            transform: translateY(0) scale(0);
            opacity: 1;
        }
        50% {
            transform: translateY(-200px) scale(1.5);
            opacity: 1;
        }
        100% {
            transform: translateY(-400px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add floating hearts on mouse move
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create floating heart occasionally
    if (Math.random() < 0.1) {
        createFloatingHeart(mouseX, mouseY);
    }
});

function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'fixed';
    heart.style.fontSize = '1.5rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.animation = 'floatingHeart 4s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 4000);
}

// Add floating heart animation
const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
    @keyframes floatingHeart {
        0% {
            transform: translateY(0) scale(0);
            opacity: 1;
        }
        20% {
            transform: translateY(-20px) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatingStyle);

// Add sparkle effect to message cards
document.querySelectorAll('.message-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        createSparkles(card);
    });
});

function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const sparkleCount = 8;
    
    for (let i = 0; i < sparkleCount; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.fontSize = '1rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1000';
            sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            sparkle.style.animation = 'sparkle 1.5s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1500);
        }, i * 100);
    }
}

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Add typing effect to hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero-text');
    const originalText = heroText.textContent;
    setTimeout(() => {
        typeWriter(heroText, originalText, 80);
    }, 2000);
});

// Add love message rotation
const loveMessages = [
    "Du bist mein größtes Glück",
    "Jeder Tag mit dir ist ein Geschenk",
    "Du machst mein Leben vollständig",
    "Ich liebe dich mehr als gestern, aber weniger als morgen",
    "Du bist mein Ein und Alles"
];

let messageIndex = 0;
const subtitle = document.querySelector('.subtitle');

setInterval(() => {
    messageIndex = (messageIndex + 1) % loveMessages.length;
    subtitle.style.opacity = '0';
    setTimeout(() => {
        subtitle.textContent = loveMessages[messageIndex];
        subtitle.style.opacity = '1';
    }, 500);
}, 5000);

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add parallax effect to background hearts
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hearts = document.querySelectorAll('.heart');
    
    hearts.forEach((heart, index) => {
        const speed = 0.5 + (index * 0.1);
        heart.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add love sound effect (optional)
function playLoveSound() {
    // Create a simple beep sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(1200, audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Add sound to button click
document.querySelector('.romantic-btn').addEventListener('click', () => {
    playLoveSound();
});

// Add love particles on page load
function createLoveParticles() {
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.innerHTML = ['💖', '💕', '💝', '💗', '💓'][Math.floor(Math.random() * 5)];
            particle.style.position = 'fixed';
            particle.style.fontSize = '1rem';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            particle.style.animation = 'particleFloat 10s linear infinite';
            particle.style.opacity = '0.3';
            
            document.body.appendChild(particle);
        }, i * 200);
    }
}

// Add particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(particleStyle);

// Start particle effect
window.addEventListener('load', () => {
    setTimeout(createLoveParticles, 3000);
});
