const bottonBlue = document.getElementById('blue')
const body = document.getElementById('body')

backgroundAzul = () => {
  body.style.backgroundColor = 'var(--blue-color)'
}

bottonBlue.addEventListener('click', backgroundAzul, false)

//Escrevi de modos diferentes para trabalha a semântica e suas possibilidades

const bottonRed = document.getElementById('red')
bottonRed.addEventListener(
  'click',
  (backgroundRed = () => {
    body.style.backgroundColor = 'var(--red-color)'
  }),
  false
)

const bottonGreen = document.getElementById('green')
bottonGreen.addEventListener(
  'click',
  (backgroundGreen = () => {
    body.style.backgroundColor = 'var(--green-color)'
  }),
  false
)
const bottonYellow = document.getElementById('yellow')
bottonYellow.addEventListener(
  'click',
  (backgroundYellow = () => {
    body.style.backgroundColor = 'var(--yellow-color)'
  }),
  false
)
