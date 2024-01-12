//buscar o livro na API e retornar o livro
const getLivro = async (id) => {
    const request = await fetch(`http://localhost:3000/livros/${id}`)
    const livro = await request.json()

    return livro
}

//carregar os dados no formulário 
const carregarLivroFormulario = (livro) => {
    document.querySelector('#titulo').value = livro.titulo
    document.querySelector('#autor').value = livro.autor
    document.querySelector('#ano').value = livro.anoLancamento
}

const carregarDados = async () => {
    //recupera parâmetros da URL (formato de string)
    const parametros = window.location.search
    console.log(parametros)
    //transforma os parametros para o formato de objeto da classe URLSearchParams
    const objetoParametros = new URLSearchParams(parametros)
    //acessa o parâmetro desejado (id)
    const id = objetoParametros.get('id')
    console.log(id)

    //chama a função para buscar o livro na API 
    const livro = await getLivro(id)
    console.log(livro)

    carregarLivroFormulario(livro)
}

carregarDados()