//FOREACH - MOSTRAR DADOS 
const array = [1, 2, 3, 4, 5, 6]
const arrayNomes = ['teste', 'teste1', 'jose', 'banana' ]

// for (let i = 0; i < array.length; i++) {
//     io.write(array[i])
// }

array.forEach((elemento, idx) => {
    console.log(elemento + ' Teste ' + idx)
})

arrayNomes.forEach((item, index) => {
    console.log((index + 1) + ' Olá ' + item)
})