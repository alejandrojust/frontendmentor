// general data
const cardData = document.querySelector(".card__data")
const cardAdded = document.querySelector('.card__added')

// visualization card data
const backCVC = document.querySelector('.back__para')
const frontNumber = document.querySelector('.front__number')
const frontName = document.querySelector('#front__name')
const frontMonth = document.querySelector('#front__month')
const frontYear = document.querySelector('#front__year')
const cardName = document.querySelector('input[name="card-name"]')
const cardNumber = document.querySelector('input[name="card-number"]')
const cardMonth = document.querySelector('input[name="card-month"]')
const cardYear = document.querySelector('input[name="card-year"]')
const cardCVC = document.querySelector('input[name="card-cvc"]')

const addCard = (e) => {
    e.preventDefault()
    cardData.classList.add('active')
    cardAdded.classList.add('active')

    backCVC.textContent = cardCVC.value
    frontNumber.textContent = cardNumber.value
    frontName.textContent = cardName.value
    frontMonth.textContent = cardMonth.value
    frontYear.textContent = cardYear.value
}

cardData.addEventListener('submit', addCard)

// input error message
const dataContent = document.querySelectorAll('.data__content')
const dataInput = document.querySelectorAll('.data__input')
const dataError = document.querySelectorAll('.data__error')

const errorNumber = document.querySelector('#error-number')
const errorExpiration = document.querySelector('#error-expiration')
const errorCVC = document.querySelector('#error-cvc')

const checkError = () => {
    if (!cardName.value) {
        cardName.classList.add('active')
    } else {
        cardName.classList.remove('active')
    }

    if (cardNumber.value.length <= 15) {
        cardNumber.classList.add('active')
        errorNumber.classList.add('active')
    } else {
        cardNumber.classList.remove('active')
        errorNumber.classList.remove('active')
    }
    
    if (cardMonth.value.length <= 1 || cardYear.value.length <= 1) {
        cardMonth.classList.add('active')
        cardYear.classList.add('active')
        errorExpiration.classList.add('active')
    } else {
        cardMonth.classList.remove('active')
        cardYear.classList.remove('active')
        errorExpiration.classList.remove('active')
    }

    if (cardCVC.value.length <= 2) {
        cardCVC.classList.add('active')
        errorCVC.classList.add('active')
    } else {
        cardCVC.classList.remove('active')
        errorCVC.classList.remove('active')
    }
}

const returnCard = () => {
    window.location.reload()
}

const cardButton = document.querySelector(".data__button").addEventListener('click', checkError)
const addedButton = document.querySelector('#added__button').addEventListener('click', returnCard)