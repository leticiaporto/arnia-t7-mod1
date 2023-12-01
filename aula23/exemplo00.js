
const numeros = [1, 2 , 3, 4, 5]
//Retornar o elemento da posiçao
console.log(numeros.at(0))
//Adicionar elemento no fim
numeros.push(6)
console.log(numeros)
//Adicionar 1 elemento no início
numeros.unshift(6)
console.log(numeros)
//Remover 1 elemento do fim
numeros.pop()
console.log(numeros)
//Remover 1 elemento do início
numeros.shift()
console.log(numeros)
//Remover elementos de uma posição específica (posicao, quantidade)
numeros.splice(1, 1)
console.log(numeros)
//Mesclar dois ou mais arrays
const numeros2 = [10, 20, 30, 40, 50]
const numeros3 = numeros.concat(numeros2)
console.log(numeros3)
//Concatenar os elementos de um array
const numerosString = numeros.join()
console.log(numerosString)
const numerosStringSeparados = numeros.join('-')
console.log(numerosStringSeparados)
//Inverter a ordem dos elementos de um array
numeros.reverse()
console.log(numeros)
//Ordenar os elementos de um array de forma simples
numeros.sort()
console.log(numeros)



