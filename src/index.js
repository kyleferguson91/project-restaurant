import {pageLoad} from './pageLoad.js'
import {homeMaker} from "./home"
import {menuMaker } from "./menu"
import { aboutMaker } from "./about"

console.log("webpack1")

pageLoad()


document.addEventListener('keydown', (e) => {
  if (e.keyCode == 9) {
    console.log("tab here")
    

    if (document.querySelector('.mainhome')) {
     
        const parent =  document.querySelector('.mainhome').parentElement
        parent.removeChild(document.querySelector('.mainhome'))
        parent.appendChild(menuMaker())
       
    }

    else if (document.querySelector('.mainmenu')) {
        const parent =  document.querySelector('.mainmenu').parentElement
        parent.removeChild(document.querySelector('.mainmenu'))
        parent.appendChild(aboutMaker())

    }

    else if (document.querySelector('.mainabout')) {
        const parent =  document.querySelector('.mainabout').parentElement
        parent.removeChild(document.querySelector('.mainabout'))
        parent.appendChild(homeMaker())
       

    }


  }
})