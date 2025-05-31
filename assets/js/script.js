//Mudança de temas

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

let currentTheme = 1;

themeToggle.addEventListener('click', () => {
    currentTheme++;
    if (currentTheme > 3) currentTheme = 1;
    body.className = `theme-${currentTheme}`;
});