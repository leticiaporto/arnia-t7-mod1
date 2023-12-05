const io = require('../io/io')

/* Faça um programa para calcular a média de 3 notas de um determinado aluno. Este programa deverá conter uma função que recebe as 3 notas de um aluno por parâmetro e uma letra. Se a letra for A o procedimento calcula a média aritmética das notas do aluno, se for P, a sua média ponderada (pesos: 5, 3 e 2). A função deverá retornar o valor da média calculada. */

function calcularMedia(n1, n2, n3, tipoMedia) {
    if (tipoMedia === 'A') {
        const mediaAritmetica = (n1 + n2 + n3) / 3
        io.write(`Média aritmética: ${mediaAritmetica}`)
    } else if (tipoMedia === 'P') {
        const mediaPonderada = ((n1 * 5) + (n2 * 3) + (n3 * 2)) / 10
        io.write(`Média ponderada: ${mediaPonderada}`)
    } else {
        io.write('Informe o tipo corretamente.')
    }
}

io.write('Informe a nota 1') //5
const nota1 = io.readFloat()
io.write('Informe a nota 2') //3
const nota2 = io.readFloat()
io.write('Informe a nota 3') //2
const nota3 = io.readFloat()
io.write('Tipo de média: (A ou P)')
const tipo = io.read() // A ou P
calcularMedia(nota1, nota2, nota3, tipo) 

