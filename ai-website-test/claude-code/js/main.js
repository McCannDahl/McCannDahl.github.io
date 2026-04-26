/**
 * JavaScript for the personal portfolio website.
 * Handles dark/light mode toggle and smooth scrolling.
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Initialize Dark/Light Mode based on local storage or preference
    // Default to system preference or light mode
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '☀️'; // Show sun icon for light mode action
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '🌙'; // Show moon icon for dark mode action
        localStorage.setItem('theme', 'light');
    }

    // 2. Dark/Light Mode Toggle Logic
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            // Switching from dark to light
            body.classList.remove('dark-mode');
            themeToggle.innerHTML = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            // Switching from light to dark
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });

    // 3. Smooth Scrolling for Navigation
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target element, accounting for the fixed header
                const headerHeight = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset;

                window.scrollTo({
                    top: offsetPosition - headerHeight - 20, // Subtract header height + margin
                    behavior: "smooth"
                });
            }
        });
    });
});