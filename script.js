const form = document.querySelector('form')
const foto = document.getElementById('foto')
const nome = document.getElementById('nome')
const casa = document.getElementById('casa')
const descricao = document.getElementById('descricao')

const personagens = [
    ['Harry Potter', 'Grifinória', 'É um cara...', 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/04/14/594335823-harry-potter.jpg'],
    ['Hermione Granger', 'Grifinória', 'É uma menina...', 'https://static.wikia.nocookie.net/harrypotter/images/5/56/Hermione-granger-deathly-hallows-part-1-portrait-1.jpg/revision/latest?cb=20220621185536&path-prefix=pt-br'],
    ['Rony Weasley', 'Grifinória', 'É um cara...', 'https://pm1.aminoapps.com/6792/2be311879452d6e701804bccf2e0093b498c1f18v2_00.jpg'],
    ['Draco Malfoy', 'Sonserina', 'É um chato...', 'https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_20151019-14270-1xaeqlk.jpg?quality=70&strip=info&w=960'],
    ['Luna Lovegood', 'Corvinal', 'É uma chata...', 'https://upload.wikimedia.org/wikipedia/en/c/c2/LunaLovegood.jpeg'],
]

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target)
    const nomeDoPersonagem = inputs.get('busca').toUpperCase()
    let encontrouPersonagem = false

    for (let i = 0; i < personagens.length; i++) {
        if (nomeDoPersonagem == personagens[i][0].toUpperCase()) {
            nome.textContent = personagens[i][0]
            casa.textContent = personagens[i][1]
            descricao.textContent = personagens[i][2]
            foto.src = personagens[i][3]
            encontrouPersonagem = true
        }
    }

    !encontrouPersonagem && alert('Personagem não encontrado!')
    return false
}