function somarValores(numeros) {
    let soma = 0

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }

    return soma
}

const numeros = [1, 2, 3, 4, 5]
const soma = somarValores(numeros)
console.log(soma)