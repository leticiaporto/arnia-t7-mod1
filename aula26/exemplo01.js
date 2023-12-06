const io = require('../io/io')

function escrevaArnia() {
    io.write('Arnia')
}

escrevaArnia()

function escrevaTexto(texto) {
    io.write(texto)
}

escrevaTexto('Arnia Texto')
const textoExemplo = 'Texto exemplo'
escrevaTexto(textoExemplo)

function soma(n1, n2) {
    const soma = n1 + n2
    return soma
}

const resultadoSoma = soma(10, 30)
io.write(resultadoSoma)

function subtracao(n1, n2) {
    return n1 - n2
}

const resultadoSubtracao = subtracao(90 - 76)
io.write(resultadoSubtracao)