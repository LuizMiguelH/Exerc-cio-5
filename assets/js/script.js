//Mudança de temas
document.body.classList.add('theme-1');

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

let currentTheme = 1;

themeToggle.addEventListener('click', () => {
    currentTheme++;
    if (currentTheme > 3) currentTheme = 1;
    body.className = `theme-${currentTheme}`;
});

//funcional
const display = document.querySelector('.result');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const reset = document.querySelector('.span-2');
const del = document.querySelector('.actions');
let awwwnn = 0
let no = 0
let ponto = true
const caracteres = 14;

//números
number.forEach(button => {
    button.addEventListener('click', () => {
    if (display.textContent.length >= caracteres) return

    const value = button.textContent;

    if (value === '.') {
        if (!ponto) return;
        ponto = false;
    } else if (!['+', '-', '*', '/'].includes(value)) {
        if (display.textContent.slice(-1).match(/[\+\-\*\/]/)) {
                ponto = true;
        }
    }

    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }

    awwwnn = 1
    no = 0
    console.log(awwwnn)
    });
});

//operadores
operator.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent.length >= caracteres) return
        if(awwwnn == 1 && no == 0){
        const value = button.textContent;
        display.textContent += value; awwwnn = 0
        } else {
            display.textContent = display.textContent.slice(0, -1);
            const value = button.textContent;
            display.textContent += value; awwwnn = 0
        }

        ponto = false;
        console.log(awwwnn)
    });
});

//resultado
equals.addEventListener('click', () => {
    if (awwwnn == 0){ display.textContent = display.textContent.slice(0, -1) || '0'; }
    try {
        const result = eval(display.textContent.replace('x', '*'));
        display.textContent = result;
    } catch {
        display.textContent = 'Erro';
    } awwwnn = 1;
});

//resetar
reset.addEventListener('click', () => {
    ponto = true;
    display.textContent = '0';
});

//deletar
del.addEventListener('click', () => {
    no = 1
    display.textContent = display.textContent.slice(0, -1) || '0';
    console.log(no)

    const ultimo = display.textContent.slice(-1);

    if (!['+', '-', '*', '/'].includes(ultimo)) {
        const lugar = display.textContent.split(/[\+\-\*\/]/);
        const ultimo = lugar[lugar.length - 1];
        ponto = !ultimo.includes('.');
    } else {
        ponto = false;
    }
});