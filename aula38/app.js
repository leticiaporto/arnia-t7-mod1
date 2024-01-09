const getPosts = async () => {//1º Buscar os posts na API    
    const requisicao = await fetch('http://localhost:3000/posts')
    const posts = await requisicao.json()
    return posts
}

const mostrarPosts = (posts) => {//2º Mostrar os posts na Página HTML    
    const postsDiv = document.querySelector('.posts')
    posts.forEach(post => {
        postsDiv.innerHTML = postsDiv.innerHTML + `<div>${post.id} - ${post.titulo}</div>`
    })  
}

const carregarDados = async () => {
    //1º Buscar os posts na API
    /*  const requisicao = await fetch('http://localhost:3000/posts')
        const posts = await requisicao.json() */
    const postagens = await getPosts() //aguardando a resposta da função getPosts para ir para a próxima linha
    //2º Mostrar os posts na Página HTML
    /* const postsDiv = document.querySelector('.posts')
        posts.forEach(post => {
            postsDiv.innerHTML = postsDiv.innerHTML + `<div>${post.id} - ${post.titulo}</div>`
        })      */
    mostrarPosts(postagens)
}

carregarDados()