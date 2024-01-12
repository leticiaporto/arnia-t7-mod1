//função que busca os livros na API
const getLivros = async () => {
    const dados = await fetch('http://localhost:3000/livros')
    const livros = await dados.json()

    return livros
}

//função que renderiza os livros na página HTML, usando os registros armazenados na variavel "listaLivros"
const mostrarLivros = (listaLivros) => {
    const bodyTabela = document.querySelector('tbody')

    //passa por cada elemento da lista de livros e acrescenta no tbody uma linha (com colunas) correspondente ao livro
    //a última coluna possui um link que redireciona para a tela de Edição passando o id do livro na URL
    listaLivros.forEach(livro => {
        bodyTabela.innerHTML = bodyTabela.innerHTML + `
            <tr>
                <td>${livro.id}</td>
                <td>${livro.titulo}</td>
                <td>${livro.autor}</td>
                <td>${livro.anoLancamento}</td>
                <td><a href="html/editar.html?id=${livro.id}">Editar</a><td>
            </tr>
        `
    })
}

//FUNÇÃO QUE CARREGA OS DADOS NA TELA
const carregarDados = async () => {
    //chamada à função que busca os dados na API e salva o retorno na variavel listaLivros
    const listaLivros = await getLivros()
    console.log(listaLivros)

    //chamada à função que renderiza os livros na página HTML passando a lista de livros como parâmetro
    mostrarLivros(listaLivros)
}

carregarDados()