const io = require('../io/io')

/* Faça um programa que solicite ao usuário um número entre 1 e 100. Se ele informar um número dentro das condições retorne "Número Válido" se não, retorne "Número Inválido"*/

io.write('Informe um número:')
const numero = io.readInt()

if(numero >= 1 && numero <= 100) {
    io.write('Número válido!')
} else {
    io.write('Número inválido!')
}