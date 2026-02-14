// ===========================
// Matrix Rain Background Effect
// ===========================

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix characters
const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
const matrixChars = matrix.split("");

const fontSize = 14;
let columns = canvas.width / fontSize;

// Array to store y-coordinate of each column
let drops = Array(Math.floor(columns)).fill(1);

// Draw matrix rain
function drawMatrix() {
    // Fade effect
    ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff9f';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Run matrix animation
setInterval(drawMatrix, 35);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
    drops = Array(Math.floor(columns)).fill(1);
});

// ===========================
// Typing Effect
// ===========================

const commands = [
    "cat about.txt",
    "ls -la skills/",
    "git log --oneline",
    "whoami"
];

let commandIndex = 0;
let charIndex = 0;
const typedTextElement = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

function typeCommand() {
    if (charIndex < commands[commandIndex].length) {
        typedTextElement.textContent += commands[commandIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeCommand, 100);
    } else {
        // Wait before starting next command
        setTimeout(() => {
            deleteCommand();
        }, 2000);
    }
}

function deleteCommand() {
    if (charIndex > 0) {
        typedTextElement.textContent = commands[commandIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteCommand, 50);
    } else {
        // Move to next command
        commandIndex = (commandIndex + 1) % commands.length;
        setTimeout(typeCommand, 500);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeCommand, 1000);
});

// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Navigation Bar Scroll Effect
// ===========================

const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.boxShadow = 'none';
    } else {
        nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Mobile Menu Toggle
// ===========================

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = mobileMenu.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            
            // Show mobile menu
            navLinks.style.display = 'flex';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.flexDirection = 'column';
            navLinks.style.backgroundColor = 'rgba(10, 14, 39, 0.98)';
            navLinks.style.padding = '2rem';
            navLinks.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            
            // Hide mobile menu after a short delay
            setTimeout(() => {
                if (!mobileMenu.classList.contains('active')) {
                    navLinks.style.display = 'none';
                }
            }, 300);
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 968) {
                mobileMenu.click();
            }
        });
    });
}

// ===========================
// Intersection Observer for Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.project-card, .skill-category, .timeline-item, .contact-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===========================
// Skill Tags Animation
// ===========================

const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.05}s`;
});

// ===========================
// Parallax Effect for Hero Section
// ===========================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ===========================
// Custom Cursor Effect (Optional)
// ===========================

const createCursorTrail = () => {
    let cursorInner = document.createElement('div');
    cursorInner.className = 'cursor-inner';
    cursorInner.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: #00ff9f;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursorInner);
    
    let cursorOuter = document.createElement('div');
    cursorOuter.className = 'cursor-outer';
    cursorOuter.style.cssText = `
        position: fixed;
        width: 30px;
        height: 30px;
        border: 2px solid rgba(0, 255, 159, 0.3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: all 0.15s ease;
        display: none;
    `;
    document.body.appendChild(cursorOuter);
    
    // Show custom cursor only on desktop
    if (window.innerWidth > 968) {
        cursorInner.style.display = 'block';
        cursorOuter.style.display = 'block';
        
        document.addEventListener('mousemove', (e) => {
            cursorInner.style.left = e.clientX + 'px';
            cursorInner.style.top = e.clientY + 'px';
            cursorOuter.style.left = (e.clientX - 15) + 'px';
            cursorOuter.style.top = (e.clientY - 15) + 'px';
        });
        
        // Scale up cursor on hover over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorInner.style.transform = 'scale(1.5)';
                cursorOuter.style.transform = 'scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursorInner.style.transform = 'scale(1)';
                cursorOuter.style.transform = 'scale(1)';
            });
        });
    }
};

// Initialize custom cursor
createCursorTrail();

// ===========================
// Easter Egg: Konami Code
// ===========================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        
        // Add rainbow animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        // Show message
        const message = document.createElement('div');
        message.textContent = '🎮 Konami Code Activated! 🎮';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 255, 159, 0.9);
            color: #0a0e27;
            padding: 2rem 3rem;
            border-radius: 8px;
            font-family: 'Fira Code', monospace;
            font-size: 1.5rem;
            font-weight: bold;
            z-index: 10001;
            animation: fadeIn 0.5s ease;
        `;
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
            document.body.style.animation = '';
        }, 3000);
    }
});

// ===========================
// Performance: Reduce animations on low-end devices
// ===========================

if (navigator.hardwareConcurrency <= 4) {
    // Reduce matrix density
    drops.length = Math.floor(drops.length / 2);
}

// ===========================
// Console Message
// ===========================

console.log(`
%c
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   👋 Hello, fellow developer!                            ║
║                                                           ║
║   Interested in the code? Check it out on GitHub!        ║
║   Built with HTML, CSS, and vanilla JavaScript           ║
║                                                           ║
║   © ${new Date().getFullYear()} Shresth Jain                              ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`, 'color: #00ff9f; font-family: monospace; font-size: 12px;');
