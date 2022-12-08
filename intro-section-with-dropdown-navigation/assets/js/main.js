const nav = document.querySelector('nav')
const bodyContent = document.querySelector('.body__content')

const imageMenu = document.querySelector('.img__menu').addEventListener('click', () => {
    nav.classList.add('active')
    bodyContent.classList.add('active')
})

const imageCloseMenu = document.querySelector('.img__close-menu').addEventListener('click', () => {
    nav.classList.remove('active')
    bodyContent.classList.remove('active')
})

const contentItems = document.querySelectorAll('.content__items')

contentItems.forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.contains('active')) {
            e.classList.remove('active')
        } else {
            e.classList.add('active')
        }
    })
});
