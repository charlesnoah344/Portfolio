const header = document.querySelector('#header');
const menuToggle = document.querySelector('#menu-toggle');
const menuIcon = menuToggle.querySelector('i');
const navbar = document.querySelector('#navbar');
const navLinks = navbar.querySelectorAll('a');

// ----- Menu mobile -----
function setMenuOpen(isOpen) {
    navbar.classList.toggle('open', isOpen);
    menuIcon.classList.toggle('bx-menu', !isOpen);
    menuIcon.classList.toggle('bx-x', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

menuToggle.addEventListener('click', () => {
    setMenuOpen(!navbar.classList.contains('open'));
});

// On referme le menu quand on choisit une section ou qu'on appuie sur Échap
navLinks.forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenuOpen(false);
});

// ----- En-tête : fond opaque dès qu'on a défilé un peu -----
function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 20);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// ----- Lien du menu actif selon la section visible -----
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
    });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));

// ----- Apparition douce des blocs au défilement -----
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // une seule fois par bloc
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
