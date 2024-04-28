const body = document.querySelector('body')
const header = document.querySelector('.header')
const menuBtn = document.querySelector('#menu-btn')
const topBar = document.querySelector('#top-bar')
const middleBar = document.querySelector('#middle-bar')
const bottomBar = document.querySelector('#bottom-bar')
const navbar = document.querySelector('#navbar')
const navLinks = document.querySelectorAll('.nav-link')
const aboutMe = document.querySelector('#about-me')

// Hamburguer menu code
const toggleHamburguerMenuClases = () => {
    topBar.classList.toggle('convert-x-1')
    topBar.classList.toggle('convert-bars')
    middleBar.classList.toggle('hidden')
    middleBar.classList.toggle('visible')
    bottomBar.classList.toggle('convert-x-2')
    bottomBar.classList.toggle('convert-bars')
    navbar.classList.toggle('visible')
    navbar.classList.toggle('hidden')
    body.classList.toggle('block-overflow')
}

window.addEventListener('load', () => {
    const headerHeight = header.clientHeight
    if (window.innerWidth < 768) {
        const navbarHeight = window.innerHeight - headerHeight
        navbar.setAttribute('style', `top: ${headerHeight}px; height: ${navbarHeight}px`)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggleHamburguerMenuClases()
            })
        })
    }
    aboutMe.setAttribute('style', `margin-top: ${headerHeight}px`)
})

menuBtn.addEventListener('click', () => {
    toggleHamburguerMenuClases()
})