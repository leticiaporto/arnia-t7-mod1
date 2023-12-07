//MAP - ALTERAR DADOS DE UM ARRAY e gera um novo array

const array = ['fulano', 'ciclano', 'beltrano']

// for (let i = 0; i < array.length; i++) {
//     array[i] = `Olá, ${array[i]}!`    
// }

// console.log(array)

const novoArray = array.map((item) => {
    return `Olá, ${item}!`
})

console.log(novoArray)