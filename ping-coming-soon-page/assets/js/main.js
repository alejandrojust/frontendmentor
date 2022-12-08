visualEmail = document.querySelector(".visual__email")
visualEmailError = document.querySelector(".visual__email-error")

const emailError = (e) => {
    if (!visualEmail.value.match('Uvuvwevwevwe Onyetenyevwe Ugwemuhwem Osas')) {
        visualEmailError.classList.add('active')
        visualEmail.classList.add('active')
        visualEmail.placeholder = 'example@email/com'
    } else {
        visualEmailError.classList.remove('active')
        visualEmail.classList.remove('active')
    }
}

visualButton = document.querySelector(".visual__button").addEventListener('click', emailError)
