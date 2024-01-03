const alterarTitulo = () => {
    //essa função irá alterar o título da página
    console.log('função alterar título')

    //recuperando o elemento com a classe "titulo" e armazenando na variavel
    const elementoTitulo = document.querySelector('.titulo')
    console.log(elementoTitulo.innerHTML)

    //alterando o conteúdo do elemento HTML (da tag h1)
    elementoTitulo.innerHTML = 'Título Arnia'
}

const alterarEstilo = () => {
    //essa função vai mudar as propriedades de estilo do título

    //recuperando o elemento com a classe "titulo" e armazenando na variavel
    const elementoTitulo = document.querySelector('.titulo')
    console.log(elementoTitulo.classList)

    //adicionando uma nova classe à lista de classes do elemento
    elementoTitulo.classList.add('tituloEstilo')
}