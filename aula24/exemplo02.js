const io = require('../io/io')

/* Faça um programa que receba um número. Use uma função para calcular e mostrar este numero x 2 */
function calcularDobro(teste) {
    const resultado = teste * 2
    io.write(resultado)
}

io.write('Digite um numero')
const numero = io.readInt()
calcularDobro(numero)
io.write(resultado)
