import { menuMaker } from "./menu"

export function homeMaker() {
    const home = document.createElement('div')
    home.classList.add('Home')
    home.classList.add('mainhome')
    const homebox = document.createElement('div')
    homebox.classList.add('homebox')
    home.appendChild(homebox)
    
    const homeTitle = document.createElement('p')
    homeTitle.textContent = "The Picklery and The Butcher"
    homeTitle.classList.add('hometext')
    homebox.appendChild(homeTitle)

    const line = document.createElement('div')
    line.classList.add('line')
    homebox.appendChild(line)

    const quote = document.createElement('p')
    quote.textContent = "The best steak in town"
    quote.classList.add('quote')
    homebox.appendChild(quote)



    const menubutton = document.createElement('button')
    menubutton.textContent = "View the Menu"
    menubutton.classList.add('menubutton')
    homebox.appendChild(menubutton)
    menubutton.addEventListener('click', (e) => {
        let contentsect = document.querySelector('.Home')
        contentsect.innerHTML = ''
        contentsect.classList = ""
        console.log('change to Menu')
        contentsect.appendChild(menuMaker())
        contentsect.classList.add('Menu')
   
    })




    return home
}