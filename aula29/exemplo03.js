class Pessoa {
    id
    cpf
    nome
    anoNascimento
    idade

    constructor(teste1, teste2, teste3, teste4) {
        this.id = teste1
        this.cpf = teste2
        this.nome = teste3
        this.anoNascimento = teste4
        this.idade = 2023 - this.anoNascimento
    }
}

const pessoa = new Pessoa(3, '48327472903', 'Beltrano', 1993)
console.log(pessoa)
const pessoaX = new Pessoa(4, '798798798', 'Teste', 1977)
console.log(pessoaX)
const pessoaY = new Pessoa()
pessoaY.id = 5
pessoaY.nome = 'Teste 2'
console.log(pessoaY)