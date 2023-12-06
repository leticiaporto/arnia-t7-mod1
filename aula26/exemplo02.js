const io = require('../io/io')

function funcaoTradicional() {
    io.write('Esta é uma Função Tradicional')
}

funcaoTradicional()

const funcaoAnonima = function () {
    io.write('Esta é uma função Tradicional Anônima')
}

funcaoAnonima()

const funcaoArrow = () => {
    io.write('Esta é uma Arrow Function (sempre anônima)')
}

funcaoArrow()