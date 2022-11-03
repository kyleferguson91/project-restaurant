export function aboutMaker() {
    const about = document.createElement('div')

    about.classList.add('aboutmenu')
    about.classList.add('mainabout')
    const innerabout = document.createElement('div')
    about.appendChild(innerabout)


    const homeTitle = document.createElement('p')
    homeTitle.textContent = "The Picklery and The Butcher"
    homeTitle.classList.add('hometext')
    homeTitle.classList.add('homemenutext')

    innerabout.appendChild(homeTitle)

    
    const quote = document.createElement('p')
    quote.textContent = "Come see what the fuss is about"
    quote.classList.add('quote')
    quote.classList.add('menuquote')
    quote.classList.add('aboutcontact')
    innerabout.appendChild(quote)

    
    const quote1 = document.createElement('p')
    quote1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod"
    quote1.classList.add('quote')
    quote1.classList.add('menuquote')
    quote1.classList.add('details')
 
    innerabout.appendChild(quote1)
    


    return about
}