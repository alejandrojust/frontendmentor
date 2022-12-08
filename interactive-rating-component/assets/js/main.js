const checkRate = document.querySelectorAll(".input__rate");
const cardSelect = document.querySelector(".card-hidden-selection");
const cardShown = document.querySelector(".card-shown");
const cardHidden = document.querySelector(".card-hidden");
const cardContainer = document.querySelector(".container");

const cardAction = () => {
    checkRate.forEach((element) => {
        if (element.checked == true) {
            cardShown.classList.add("active");
            cardHidden.classList.add("active");
            cardContainer.classList.add("active");
            cardSelect.textContent = `You have selected ${element.value} out of 5`;
        }
    });
};

const ratinSubmitBtn = document
    .querySelector(".form-ratings")
    .addEventListener("submit", cardAction);

const returnBtn = document
    .querySelector(".return__btn")
    .addEventListener("click", () => {
        cardShown.classList.remove("active");
        cardHidden.classList.remove("active");
        cardContainer.classList.remove("active");

        checkRate.forEach((element) => {
            if (element.checked == true) {
                element.checked = false;
            }
        });
    });
