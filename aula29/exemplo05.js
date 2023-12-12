const array = [
    {
        id: 5,
        nome: 'Maria',
        idade: 50
    },
    {
        id: 7,
        nome: 'Jose',
        idade: 45
    },
    {
        id: 9,
        nome: 'João',
        idade: 13
    }
]

//pessoas com idade maior que 13
const pessoaMaioresDeIdade13 = array.filter(item => item.idade > 13)
console.log(pessoaMaioresDeIdade13)
const pessoasId7 = array.filter(item => item.id === 7)
console.log(pessoasId7)
console.log(pessoasId7[0].idade)

const pessoa7 = array.find(item => item.id === 7)
console.log(pessoa7, pessoa7.nome, pessoa7.idade)