const io = require('../io/io')
/* Programa de computador para escrever um nome, fornecido pelo usuário, 10 vezes. */

io.write('Informe o seu nome:')
const nome = io.read()
let iterador = 0

while (iterador < 10) {
    io.write(nome)
    iterador++
}