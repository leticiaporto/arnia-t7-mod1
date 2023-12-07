const io = require('../io/io')
// FILTER - filtra elementos de acordo com uma condição
const nomes = ['Maria', 'Fulano', 'teste', 'Karina', 'Maria']

const marias = []

// for (let i = 0; i < nomes.length; i++) {
//     if (nomes[i] === 'Maria') {
//         marias.push(nomes[i])
//     }
// }
// io.write(marias)

const nomesMarias = nomes.filter((item) => {
    return item === 'Maria' //true ou false
}) 

console.log(nomesMarias)