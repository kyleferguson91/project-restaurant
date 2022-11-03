import {homeMaker} from "./home"
import {menuMaker } from "./menu"
import { aboutMaker } from "./about"

export function cont() {

    //change up the active content based on the selected link

    const links = document.querySelectorAll('a')
    console.log(links)
    let contentsect = document.createElement('div')

    
    contentsect.appendChild(homeMaker())



let link = document.querySelectorAll('a')
link.forEach((elem,ind,arr) => {
    elem.addEventListener('click', (e) => {
        console.log(e.target.textContent)

        
         
        if (contentsect.classList.contains(e.target.textContent)) {
         console.log("page equal to choice")
         // do nothing selection the same
      
         
        }

        else {
            console.log("change to this page now")
            // clear the console display
            contentsect.classList = "";
      
            // now update it based on what was clicked

            if (e.target.textContent == "Menu") {
              contentsect.innerHTML = ''
                contentsect.appendChild(menuMaker())
                console.log('change to menu')
                contentsect.classList.add('Menu')
         
            }
            
            else if (e.target.textContent == "Home") {
                contentsect.innerHTML = ''
                console.log('change to Home')
                contentsect.appendChild(homeMaker())
                contentsect.classList.add('Home')
           
               



            }

            else if (e.target.textContent == "About") {
                contentsect.innerHTML = ''
                console.log('change to About')
                contentsect.appendChild(aboutMaker())
                contentsect.classList.add('About')
            }
            
        }



    })
})





return contentsect















}