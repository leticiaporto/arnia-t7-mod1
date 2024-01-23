
const getMes = (mes) => {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    return meses[mes]
}

const cadastrarProduto = () => {
    const date = new Date()

    const produto = {
        nome: 'Teste 1',
        data: date
    }

    fetch('http://localhost:3000/produtos', {
        method: 'POST', //tipo de método HTTP
        headers: { //informações adicionais (formato dos dados: fixo)
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto) //conteudo a ser armazenado na API (é necessário converter para string com o JSON.stringify)
    })

    carregarProdutos()
}

const carregarProdutos = async () => {
    const request = await fetch('http://localhost:3000/produtos')
    const produtos = await request.json()
    const dados =  document.querySelector('.dados')
    dados.innerHTML = ''

    produtos.forEach(produto => {
        const dia = new Date(produto.data).getDate()
        const mes = new Date(produto.data).getMonth()
        const mesString = getMes(mes)

        dados.innerHTML += `
            <div>
                ${produto.nome} - ${dia} de ${mesString}
            </div>
            `
    })
}

carregarProdutos()

