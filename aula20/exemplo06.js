const io = require('../io/io')

/* Faça um programa de computador que escreve, em ordem crescente, os números naturais
menores que 100. */ //0 - 1 - 2 - 3 - 4 - 5 ... 99

let iterador = 0 

while (iterador < 100) {
    io.write(iterador)
    iterador++
}