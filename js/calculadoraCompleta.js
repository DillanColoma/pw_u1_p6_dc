let display = document.querySelector('.display');
/*let display = document.getElementById('displayC');*/
let operador1 = '';
let operador2 = '';
let operador = '';

const limpiarPantalla = () => {
    display.textContent = '0'
    operador1 = '';
    operador2 = '';
    operador = '';
}
function borrarUltimo() {
    const display = document.querySelector('.display');
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '' || display.textContent === '-') {
        display.textContent = '0';
    }
}

function agregarNumero(numero) {
    display=document.querySelector('.display')
    if (operador === '') {
        operador1 += numero;
        display.textContent = operador1;
    } else {
        operador2 += numero;
        display.textContent = operador2;
    }
}

function agregarOperador(op) {
    operador = op;
}
function agregarDecimal() {
    if (operador === '') {
        if (!operador.includes('.')) {
            operador1 += '.';
            display.textContent = operador1;
        }
    } else {
        if (operador2.includes('.')) {
            operador2 += '.'
            display.textContent = operador2;
        }
    }
}
function calcularOperacion() {
    let resultadoOperacion = 0;
    switch (operador) {
        case '+':
            resultadoOperacion = parseFloat(operador1) + parseFloat(operador2);
            break;
        case '-':
            resultadoOperacion = parseFloat(operador1) - parseFloat(operador2);
            break;
        case '/':
            resultadoOperacion = parseFloat(operador1) / parseFloat(operador2);
            break;
        case 'X':
            resultadoOperacion = parseFloat(operador1) * parseFloat(operador2);
            break;
        
    }
    display.textContent = resultadoOperacion
    operador1 = resultadoOperacion.toString();
    operador2 = '';
    operador = '';
}