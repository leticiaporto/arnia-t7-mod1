const io = require('../io/io')

/* Crie um programa que receba dois número e use uma função para calcular e retornar a soma desses numeros */

//função de notação tradicional
function somaNumeros(n1, n2) {//escopo fechado!
    const somaDosNumeros = n1 + n2

    return somaDosNumeros
}

io.write('--- Soma de 2 números ---')
io.write('Informe o 1º número:')
const numero1 = io.readInt()
io.write('Informe o 2º número')
const numero2 = io.readInt()
// const soma = numero1 + numero2 //imagine aqui uma operação um pouco mais complexa :D
const soma = somaNumeros(numero1, numero2)
io.write(`A soma dos número é: ${soma}`)