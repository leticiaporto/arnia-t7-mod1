const io = require('../io/io')
/* Faça um programa que escreva o dobro de um número que foi fornecido pelo usuário  */

//Mostrar uma mensagem para o usuário
io.write('Digite o número para multiplicá-lo por 2:')
//Receber o número do usuário
const numero = io.readInt()
//Feedback para o usuário
io.write(`Obrigado! O número digitado foi: ${numero}`)
//Dobrar o número digitado
const resultado = numero * 2
//Mostrar o resultado do cálculo (número dobrado)
io.write('O dobro do número' + numero + 'é:' + resultado)
io.write(`O dobro do número ${numero} é: ${resultado}`)//interpolação