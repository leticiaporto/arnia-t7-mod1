const alterarTitulo = () => {
    //recuperei o elemento com o id = titulo
    const titulo = document.querySelector('#titulo')
    //alterei o conteudo do elemento (tag) encontrado
    titulo.innerHTML = 'Novo título'
}

const alterarSubtitulo = () => {
    //recuperar o primeiro elemento que atender o seletor => a classe subtitulo
    const subtitulo = document.querySelector('.subtitulo')
    subtitulo.innerHTML = subtitulo.innerHTML + ' teste'
}

const alterarSubtitulos = () => {
    //recuperar a lista de elementos que atendem o selector => a classe subtitulo
    const subtitulos = document.querySelectorAll('.subtitulo')
    subtitulos.forEach(elemento => {
        elemento.innerHTML = elemento.innerHTML + ' teste querySelectorAll'
    })
}