const io = require('../io/io')

/* Faça um programa que espera receber um número maior que 10. Se o número informado não for maior que dz, informe ao usuário que o número é inválido */

io.write('Informe um número maior que 10:')
const numero = io.readInt()

if (numero > 10) {
    io.write('Número recebido com sucesso!')
} else {
    io.write('O número informado é inválido!')
}