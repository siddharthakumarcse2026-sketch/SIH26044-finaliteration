// ==================== SMOOTH SCROLL ====================
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ==================== TAB SWITCHING ====================
function switchTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    // Deactivate all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // Activate selected
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

// ==================== MODAL CONTROLS ====================
function showLogin() {
    document.getElementById('loginModal').classList.add('active');
}

function showRegister() {
    document.getElementById('registerModal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Close modal on outside click
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// ==================== FORM HANDLERS ====================
function handleLogin(e) {
    e.preventDefault();
    alert('Login functionality would connect to backend authentication API.');
    closeModal('loginModal');
}

function handleRegister(e) {
    e.preventDefault();
    alert('Registration would create a new user in the database with role-based access.');
    closeModal('registerModal');
}

function handleContact(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    e.target.reset();
}

// ==================== ANIMATED COUNTERS ====================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target.toLocaleString() + '+';
            }
        };
        updateCounter();
    });
}

// ==================== INTERSECTION OBSERVER ====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('hero-stats')) {
                animateCounters();
            }
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.hero-stats, .problem-card, .feature-card, .step').forEach(el => {
    observer.observe(el);
});
