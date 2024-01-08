/* Código específico para a API da Marvel */
const timestamp = (new Date()).getTime()
const publicKey = 'SUA_CHAVE_PUBLICA_AQUI'
const privateKey = 'SUA_CHAVE_PRIVADA_AQUI'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const mostrarDados = (resposta) => {
    //RENDERIZA OS DADOS NA TELA (MOSTRA)
    const divPersonagens = document.querySelector('.personagens')
    const personagens = resposta.data.results

    personagens.forEach(personagem => {
        divPersonagens.innerHTML = divPersonagens.innerHTML +
            `<div>${personagem.id} - ${personagem.name}</div>` 
    })
}

const buscarPersonagens = async () => {
    try {
        //REQUISIÇÃO HTTP - MÉTODO GET
        const respostaHttp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)
        const resposta = await respostaHttp.json()
        //Chama a função que irá mostrar os dados passando como parâmetro a resposta da API
        mostrarDados(resposta)
    } catch (error) {
        console.log('Erro: ', error)
    }
}

buscarPersonagens()

