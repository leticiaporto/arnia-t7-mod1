const io = require('../io/io')

/* Faça um programa que receba 5 números. E depois do recebmento de todos os número mostre cada um concatenado com a palavra Número: antes
1, 2, 3, 4
Número: 1
Número: 2
Número: 3
*/

const array = []

for (let i = 0; i < 5; i++) {
    io.write(`Digite o ${i + 1}º número:`)
    const numero = io.readInt()
    array.push(numero)
}

io.write(array)
io.write(array[0])
io.write(array[1])
io.write(array[2])
io.write('------------')

for (let i = 0; i < array.length; i++) {// 0 - 1 - 2 - 3 - 4
    io.write(`Número: ${array[i]}`) // array[0] - array[1] - array[2] - array[3] - array[4] 
}