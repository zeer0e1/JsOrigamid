// const h1 = document.querySelector('h1')
// const animaisLIsta = document.querySelector('.animais-descricao')

// h1.innerHTML = '<p>Novo Titulo </p>'


// const lista = document.querySelector('.animais-lista')

// lista.parentElement // pai
// lista.parentElement.parentElement // pai do pai
// lista.previousElementSibling // elento acima
// lista.nextElementSibling // elemento abaixo


// lista.children // retorna um HTMLCOllection com os filhos do elemento selecionado
// lista.querySelector('li:last-child') // Seleciona o último elemetno da lista utilizando a tag do CSS



// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')

// lista.appendChild(titulo) // move a lista para o final de contato
// contato.insertBefore(lista,titulo) // insere a lista antes de titulo
// contato.removeChild(titulo) // remove titulo do contato
// contato.appendChild(lista, titulo) //susbstitui a lista pelo titulo

// const novoh1 = document.createElement('h1')
// novoh1.innerText = 'Novo titulo'
// novoh1.classList.add('titulo');


const h1 = document.querySelector('h1')
const fac = document.querySelector('.fac')

const cloneh1 = h1.cloneNode(true)

fac.appendChild(cloneh1)