// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Tabs functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const serviceTabs = document.querySelectorAll('.service-tab');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and tabs
        tabButtons.forEach(btn => btn.classList.remove('active'));
        serviceTabs.forEach(tab => tab.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding tab
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // Show success message
    alert('Obrigado por entrar em contato! Retornaremos em breve.');
    
    // Reset form
    contactForm.reset();
    
    // In a real implementation, you would send this data to a backend service
    // For example:
    // fetch('your-backend-endpoint', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // });
});

// Smooth scroll for anchor links
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with fade-in animation
const animatedElements = document.querySelectorAll('.about__content, .stat-card, .service-grid, .team-card, .contact__grid');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Add stagger effect to stat cards
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

// Add stagger effect to team cards
const teamCards = document.querySelectorAll('.team-card');
teamCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero__background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]');

function activateNavLinks() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                document.querySelectorAll('.nav__link').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLinks);

// Number counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
};

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                stat.textContent = '0+';
                animateCounter(stat, number);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// Prevent dropdown from closing on mobile
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav__link');
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 968) {
            e.preventDefault();
            dropdown.classList.toggle('open');
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console message
console.log('%cAdvizo - Excelência em Soluções Fiscais', 'font-size: 20px; font-weight: bold; color: #D4AF37;');
console.log('%cSite desenvolvido com HTML, CSS e JavaScript', 'font-size: 14px; color: #4A5568;');
