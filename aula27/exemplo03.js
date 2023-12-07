//MAP - ALTERAR DADOS DE UM ARRAY e gera um novo array

const array = [1, 6, 7, 8, 45]

const novoArray = array.map((item) => { // 1 - 2 - 3 - 4 - 5
    const novoValor = item * 2 // 1 -> 2 / 6 -> 12 / 7 -> 14 / 8 -> 16 / 45 -> 90
    return novoValor
})

console.log(novoArray)