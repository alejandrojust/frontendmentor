const headerIconMenu = document.querySelector('.header__icon-menu')
const navbarIconClose = document.querySelector('.navbar__icon-close')
const navbar = document.querySelector('.navbar')
const bodyContent = document.querySelector('.body__content')

const openNavbar = () => {
    navbar.classList.add('active')
    bodyContent.classList.add('active')
}

const closeNavbar = () => {
    navbar.classList.remove('active')
    bodyContent.classList.remove('active')
}

headerIconMenu.addEventListener('click', openNavbar)
navbarIconClose.addEventListener('click', closeNavbar)
