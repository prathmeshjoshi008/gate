// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});
