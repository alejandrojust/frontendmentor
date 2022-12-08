const cardAdviceId = document.querySelector("#advice-id");
const cardAdviceText = document.querySelector("#advice-text");

const randomAdvice = async() => {
    try {
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json()
        cardAdviceId.textContent = data.slip.id;
        cardAdviceText.textContent = data.slip.advice;
    } catch (error) {
        console.log(error)
    }
}

document.querySelector('.content__dice').addEventListener('click', randomAdvice)

