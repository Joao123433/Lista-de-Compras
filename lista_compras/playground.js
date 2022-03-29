const relogio = document.querySelector('#relogio')
let agora = new Date()
let hora = agora.getHours()
let minutos = agora.getMinutes()
relogio.innerHTML = `${hora}:${minutos}`

const input = document.querySelector('#myInput')
const button = document.querySelector('#botao')
const lista = document.querySelector('.Lista')
const tema = document.querySelector('#tema')

input.focus()
button.addEventListener('click', function(event) {
    event.preventDefault()
    
    if(input.value == 0) {
        alert("Digite algo")
    } else {
        const item = document.createElement('li')
        let itemList = String(input.value)
        item.classList = "lista"
        item.textContent = `${itemList}`
        lista.appendChild(item)
        input.value = ''
    }
    input.focus()
})