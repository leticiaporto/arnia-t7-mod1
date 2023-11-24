const io = require('../io/io')
/* Faça um programa que escreva o nome de pessoa que foi fornecido pelo usuário */

io.write('Digite o seu nome:')// = console.log('Digite o seu nome:')
const nome = io.read()
io.write('O nome informado foi: ' + nome)
io.write(`O nome informado foi: ${nome}`) //intepolação de variável