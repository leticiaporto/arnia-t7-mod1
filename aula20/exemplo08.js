const io = require('../io/io')

/* Faça um Programa de computador para calcular a soma dos naturais de 1 a 0. */
// 1 + 2 + 3 + 4 + 5 + 6 + ... + 8 + 9 + 10
let iterador = 1
let soma = 0

while (iterador <= 10) {
    io.write(`O valor do iterado atual é ${iterador}`)
    soma = soma + iterador
    io.write(`O valor de soma atual é ${soma}`)
    iterador++
    io.write(`----------------------------------------`)
}