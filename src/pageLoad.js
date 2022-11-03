import {heads} from './header.js'
import {foot} from './footer.js'
import {cont} from './content.js'
import {border} from './borders.js'
export function pageLoad() {

const mainLayout = document.querySelector('#content')
mainLayout.classList.add('mainContainer')


mainLayout.appendChild(heads())
mainLayout.appendChild(border())

mainLayout.appendChild(cont())
mainLayout.appendChild(border())
mainLayout.appendChild(foot())







}