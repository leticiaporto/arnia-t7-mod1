const timestamp = (new Date()).getTime()
const publicKey = 'SUA_PUBLIC_KEY_AQUI'
const privateKey = 'SUA_PRIVATE_KEY_AQUI'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

console.log(promise)