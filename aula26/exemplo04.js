const io = require('../io/io')

/* Criar uma função que recebe os dados de um usuário e posteriormente utilizar uma segunda função para dar boas vindas ao usuário */

const darBoasVindas = (nomeUsuario) => {
    io.write(`Olá ${nomeUsuario}`)
}

/*
    Imagine que a função "receberUsuario" [NÃO TEM] acesso direto à função "darBoasVindas"
*/
const receberUsuario = (fnBoasVindas, fnConfirmar) => {
    io.write('Informe o seu nome:')
    const nome = io.read()
    // darBoasVindas(nome) -> acesso direto
    fnBoasVindas(nome) //chamando ela pelo apelido
    fnConfirmar()
}

receberUsuario(
    darBoasVindas, 
    () => {
        io.write('Verifique seu e-mail e faça a confirmação!')
    }
)