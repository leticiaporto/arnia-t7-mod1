const io = require('../io/io')
/* Faça um programa que receba dois números e imprima a diferença de um pelo outro */

io.write('Digite o primeiro número:')
const numero1 = io.readInt()

io.write('Digite o segundo número:')
const numero2 = io.readInt()

const diferenca = numero1 - numero2

io.write(`A diferença entre os números é: ${diferenca}`)