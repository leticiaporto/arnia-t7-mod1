const alertarInicio = () => {
    console.log('Bem vindo, aluno da Arnia!')
    // window.alert('Bem vindo!')
}

const alertarClique = () => {
    console.log('foi clicado!')
}

const alterarParagrafo = () => {
    const paragrafo = document.getElementById('first')
    console.log(paragrafo)
    paragrafo.innerHTML = 'Teste' 
}

const alterarParagrafoDivs = () => {
    const paragrafo = document.getElementById('first')
    paragrafo.innerHTML = `
        <div>
            Div1
        </div>
        <div>
            Div2
        </div>`
}