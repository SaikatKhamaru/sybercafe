let isMenuOpen = false;

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveLink(sectionId); // Set the active link on click
    closeMenu(); // Close the menu after clicking a navigation link
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (isMenuOpen) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.add('active');
    }
    isMenuOpen = !isMenuOpen;
}

function closeMenu() {
    const navLinks = document.getElementById('nav-links');
    if (isMenuOpen) {
        navLinks.classList.remove('active');
        isMenuOpen = false;
    }
}

function setActiveLink(sectionId) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Update active link based on scroll position
function updateActiveLinkOnScroll() {
    const sections = document.querySelectorAll('.section');
    let currentSectionId = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Check if the section is in view
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionId = section.getAttribute('id');
        }
    });

    if (currentSectionId) {
        setActiveLink(currentSectionId);
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', updateActiveLinkOnScroll);

// Also set active link on initial page load if already scrolled
document.addEventListener('DOMContentLoaded', updateActiveLinkOnScroll);
