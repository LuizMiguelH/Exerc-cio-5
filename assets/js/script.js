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
const result = document.querySelector('.result');
let awwwnn = 0
let no = 0
let ponto = true
let pósIgual = true
const caracteres = 43;

//números
number.forEach(button => {
    button.addEventListener('click', () => {
    if (display.textContent.length >= caracteres) return

    const value = button.textContent;
    
    if (value === '.' && pósIgual === false){
        display.textContent = '0' + value
        display.textContent = display.textContent.slice(0, -1) || '0';
        pósIgual = true;

    } else if (value === '.') {
        if (!ponto) return;
        ponto = false;
    } else if (!['+', '-', '*', '/'].includes(value)) {
        if (display.textContent.slice(-1).match(/[\+\-\*\/]/)) {
                ponto = true;
        }
    }
    
    if (display.textContent === '0' && value !== '.' || pósIgual === false) {
        display.textContent = value;
        pósIgual = true;
    } else { 
        display.textContent += value;
        diminuirTexto();
    }
    awwwnn = 1
    no = 0
    console.log(awwwnn)
    
    console.log(pósIgual)
    });
});



//operadores
operator.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent.length >= caracteres) return;
        pósIgual = true

        const ultimo = display.textContent.slice(-1)
        if (ultimo == '+' || ultimo == 'x' || ultimo == '-' || ultimo == '/' || ultimo == '.'){
            display.textContent = display.textContent.slice(0, -1) || '0';
            const value = button.textContent;
            display.textContent += value;
            diminuirTexto();
        } else {
            const value = button.textContent;
            display.textContent += value;
            diminuirTexto();
        }
        
        ponto = false;
    });
});

//resultado
equals.addEventListener('click', () => {
    const ultimo = display.textContent.slice(-1)
    if (ultimo == '+' || ultimo == 'x' || ultimo == '-' || ultimo == '/' || ultimo == '.'){ 
        display.textContent = display.textContent.slice(0, -1) || '0'; }
    try {
        const result = eval(display.textContent.replace('x', '*'));
        display.textContent = result;
        diminuirTexto();
    } catch {
        display.textContent = 'Erro';
    } awwwnn = 1;
    ponto = true
    pósIgual = false
});

//resetar
reset.addEventListener('click', () => {
    ponto = true;
    display.textContent = '0';
    diminuirTexto();
});

//deletar
del.addEventListener('click', () => {
    no = 1
    display.textContent = display.textContent.slice(0, -1) || '0';
    diminuirTexto();
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

//result > display (resolvido)
function diminuirTexto() {
    const texto = display.textContent.length;

    if (texto > 28) {
        display.style.fontSize = '20px';
    } else if (texto > 14) {
        display.style.fontSize = '30px';
    } else {
        display.style.fontSize = '60px';
    }
}