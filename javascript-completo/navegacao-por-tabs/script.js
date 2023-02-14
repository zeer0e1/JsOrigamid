const menu = document.querySelector('nav')
const copy = document.querySelector('.copy')

const novoMenu = menu.cloneNode(true)

copy.appendChild(novoMenu)


const facDL = document.querySelector('.fac-lista')

const firstDl = facDL.children[0]


const filhoDL = firstDl.nextElementSibling


const fac = document.querySelector('.fac')
const animais = document.querySelector('.animais')

fac.innerHTML = animais.innerHTML

