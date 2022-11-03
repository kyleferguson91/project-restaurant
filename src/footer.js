export function foot() {
    const footer = document.createElement('div')

footer.classList.add('footer')

const footerText = document.createElement('p')
footerText.textContent = "Designed by Fizzle Boch Productions © 2022"
footer.appendChild(footerText)

return footer
}