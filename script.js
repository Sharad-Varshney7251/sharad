// Typing Animation for Hero Role
const typingText = document.getElementById('typing-text');
const roles = ['Frontend Developer', 'Node.js Learner', 'C++ (DSA Beginner)'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex--);
    } else {
        typingText.textContent = currentRole.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, speed);
}

typeWriter();

// Scroll-based Animations (Fade-in on Scroll)
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Navbar Smooth Scrolling and Active Link Indicator
const navLinks = document.querySelectorAll('.nav-links a');
const navbar = document.getElementById('navbar');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Update active navbar link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight - 50;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact Form Submission
// const contactForm = document.getElementById('contact-form');
// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(contactForm);
//     const data = Object.fromEntries(formData);
//     console.log('Form submitted:', data);
//     alert('Thank you for your message! (This is a demo; integrate with a backend for real submission.)');
//     contactForm.reset();
// });