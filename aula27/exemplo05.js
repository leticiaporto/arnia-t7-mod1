const io = require('../io/io')
// REDUCE - reduz o array de valores à um valor único
const array = [1, 6, 7, 8, 45]

const soma = array.reduce((acumulador, item) => {
    return acumulador + item
})

console.log(soma)