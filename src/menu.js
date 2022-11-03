export function menuMaker() {
    const menu = document.createElement('div')
    menu.classList.add('Menu')
    menu.classList.add('outermenu')
    const innermenu = document.createElement('div')
    menu.appendChild(innermenu)
    innermenu.classList.add('innermenu')


    const homeTitle = document.createElement('p')
    homeTitle.textContent = "The Picklery and The Butcher"
    homeTitle.classList.add('hometext')
    homeTitle.classList.add('homemenutext')
    innermenu.appendChild(homeTitle)

    
    const quote = document.createElement('p')
    quote.textContent = "Menu"
    quote.classList.add('quote')
    quote.classList.add('menuquote')
    innermenu.appendChild(quote)

    
    const line = document.createElement('div')
    line.classList.add('menuline')
    innermenu.appendChild(line)

   
    const menugrid = document.createElement('div')
    menugrid.classList.add('menugrid')
    innermenu.appendChild(menugrid)

let choices = ["Steak of Ban-Taman", "Burning Ring Cheerios", "Nuts and Bolterra Shum"]

    for (let i = 0; i<3; i++) {
        const cell = document.createElement('div')
        cell.classList.add('menuitem')
        const title = document.createElement('p')
        title.classList.add('menuitem1')
        cell.appendChild(title)
      
        const line = document.createElement('div')
        line.classList.add('menuline1')
        cell.appendChild(line)

        title.textContent = `${choices[i]}`
        menugrid.appendChild(cell)

        let description = document.createElement('p')
        description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet'
        cell.appendChild(description)
        description.classList.add('menudescriptions')

        let price = document.createElement('p')
        price.classList.add('menuprice')
        price.textContent = "20"
        cell.appendChild(price)

    }

    return menu
}