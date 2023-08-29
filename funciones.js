// Funciones Declarativas

// Implementación de la función
// function saludar() {
//     console.log('Bievenid@ a mi sitio web')
// }
// Invocación
// saludar()

// function saludar(nombre) {
//     console.log('Bievenid@ a mi sitio web ' + nombre);
// }
// Invocación
// saludar("John")

// function suma(num1, num2) {
//     let resultado = num1 + num2;
//     console.log(resultado)
// }
// Invocación
// suma(2, 6)

// function calculo(num1, num2, operacion) {
//     let resultado;
//     switch (operacion) {
//         case "+":
//             resultado = num1 + num2;
//             console.log(resultado)
//             break;
//         case "-":
//             resultado = num1 - num2;
//             console.log(resultado)
//             break;
//         case "/":
//             resultado = num1 / num2;
//             console.log(resultado)
//             break;
//         case "*":
//             resultado = num1 * num2;
//             console.log(resultado)
//             break;
//     }
// }
// // Invocación
// calculo(6, 2, "*")

const suma = (num1, num2) => num1 + num2;

const resta = (num1, num2) => num1 - num2;

const multiplicacion = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;


const calculo = function (num1, num2, operacion) {
    switch (operacion) {
        case "+":
            console.log(suma(num1, num2))
            break;
        case "-":
            console.log(resta(num1, num2))
            break;
        case "/":
            console.log(division(num1, num2))
            break;
        case "*":
            console.log(multiplicacion(num1, num2))
            break;
    }
}
// Invocación
calculo(10, 2, "/")

const resultadoSuma = suma(2, 2)
console.log(resultadoSuma)

