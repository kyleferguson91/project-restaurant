export function heads() {
    const header = document.createElement('div')

header.classList.add('header')



const nav = document.createElement('ul')


let linksarr = ["Home", "Menu", "About"]
let myHTML = ""
for (let i = 0; i<3; i++) {
myHTML += `<li class="liststyle"><a href="#" class="linkstyle">${linksarr[i]}</a></li>`
}
header.innerHTML = myHTML
return header
}