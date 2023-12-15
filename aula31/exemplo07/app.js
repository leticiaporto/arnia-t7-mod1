const pessoas = [
    {
        id: 1, 
        nome: "Luiz",
        cpf: '485.998.958-59'
    },
    {
        id: 2,
        nome: 'Sara',
        cpf: '789.596.958-89'
    },
    {
        id: 3,
        nome: 'Mariana',
        cpf: '789.678.958-89'
    }
]

const carregar = () => {
    const pessoasContainer = document.querySelector('.pessoas')

    pessoas.forEach(pessoa => {
        pessoasContainer.innerHTML = pessoasContainer.innerHTML + `
        <div>
            ${pessoa.id} - ${pessoa.nome} - ${pessoa.cpf}
        </div>`
    })
}