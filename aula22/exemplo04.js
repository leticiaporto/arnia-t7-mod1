const io = require('../io/io')

/* Escreva um programa que repita a frase "Arnia Escola da Programação" a quantidade de vezes que o usuário definir */

io.write('Defina a quantidade de repetições:')
const repeticoes = io.readInt()

for (let i = 0; i < repeticoes; i++) {
    io.write("Arnia Escola da Programação")
}

