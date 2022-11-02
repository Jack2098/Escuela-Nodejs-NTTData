function sumar(num1: number, num2: number) {
    console.log(`La suma de ${num1} y ${num2} es: ${num1 + num2}`)
}

interface valores {
    num1: number;
    num2: number;
    operador?: string;
}

function operacion({num1, num2, operador = '+'}: valores): void {
    console.log(`Valores ingresados: ${num1}, ${num2}, ${operador}`)
    switch (operador) {
        case '+':
            console.log(`La suma de ${num1} y ${num2} es: ${num1 + num2}`)
            break
        case '-':
            console.log(`La resta de ${num1} y ${num2} es: ${num1 - num2}`)
            break
        case '*':
            console.log(`La multiplicación de ${num1} y ${num2} es: ${num1 * num2}`)
            break
        case '/':
            console.log(`La división de ${num1} y ${num2} es: ${num1 / num2}`)
            break
        default:
            console.log('Operdaor incorrecto.')
            break
    }
}

sumar(200, 4)

const valores: valores = {
    num1 : 10,
    num2 : 5,
    operador : '*'
}

operacion(valores)