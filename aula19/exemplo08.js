const io = require('../io/io')

/* Receba um número e informe se ele é igual ou diferente de 10 */

io.write('Informe um número:')
const numero = io.readInt()
let resultado = ''

if (numero === 10) {
    resultado = 'O número é igual a 10'
} else {
    resultado = 'O número é diferente de 10'
}

io.write(resultado)