const cliqueBotao = () => {
    alert('O botão foi clicado!')
}

//recuperando o elemento da página HTMl através do DOM
const botao = document.getElementById('botao')

//adicionando um ouvinte de evento do tipo "click" ao botão
botao.addEventListener('click', () => {
    console.log('O botão foi clicado (ação executada pelo ouvinte)')
})

botao.addEventListener('mouseover', () => {
    botao.classList.add('verde')
})

botao.addEventListener('mouseout', () => {
    botao.classList.remove('verde')
})

//adicionando um evento de clique duplo ao botão
botao.addEventListener('dblclick', () => {
    //recuperando o elemento container da página HTML através do DOM
    const container = document.querySelector('.container')
    container.classList.remove('none')
})