// Highlight Active Section on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".progress div");
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.width = skill.getAttribute("data-value");
        }, index * 500);
    });
});
