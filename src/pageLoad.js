export function pageLoad() {

const mainLayout = document.querySelector('#content')
mainLayout.classList.add('mainContainer')

const newDiv = document.createElement('div')
mainLayout.appendChild(newDiv)
newDiv.classList.add('largeborder')

const newDiv2 = document.createElement('div')
mainLayout.appendChild(newDiv2)
newDiv2.classList.add('largeborder')
newDiv2.classList.add('bottomborder')


}