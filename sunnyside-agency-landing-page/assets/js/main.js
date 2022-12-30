let navMenuIcon = document.querySelector('.nav__menu.icon')
let navContent = document.querySelector('.nav__content')

const openMenu = () => {
    if (navContent.classList.contains('active')) {
        navContent.classList.remove('active')
    } else {
        navContent.classList.add('active')
    }
} 

navMenuIcon.addEventListener('click', openMenu)