
const timestamp = (new Date()).getTime()
const publicKey = 'SUA_CHAVE_PUBLICA_AQUI'
const privateKey = 'SUA_CHAVE_PRIVADA_AQUI'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)
