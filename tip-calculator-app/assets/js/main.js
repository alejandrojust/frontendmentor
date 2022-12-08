let itemTip = document.querySelectorAll(".item__tip");
let containerNumberPeople = document.querySelector(".container__number-people");
let totalResult = document.querySelector(".total__result");
let tipAmountResult = document.querySelector(".tip-amount__result");
let resetResult = document.querySelector(".reset__result");
let inputBill = document.querySelector("#input__bill");
let inputTip = document.querySelector('#input__tip')
let inputNumberPeople = document.querySelector("#input__number-people");

const calculateTip = () => {
    let inputBill = document.querySelector("#input__bill");
    let inputNumberPeople = document.querySelector("#input__number-people");
    let resetResultActive = document.querySelector(".reset__result.active");

    if (inputBill.value === '' || inputNumberPeople.value === '') {
        tipAmountResult.textContent = "$0.00";
        totalResult.textContent = "$0.00";
    } else {
        try {
            if (inputNumberPeople.value == 0) {
                containerNumberPeople.classList.add("active");
            } else {
                containerNumberPeople.classList.remove("active");
            }

            let itemTipActive = document.querySelector(".item__tip.active");
        
            tipAmountResult.textContent =
                "$" +
                (
                    (inputBill.value * (itemTipActive.value / 100)) /
                    inputNumberPeople.value
                ).toFixed(2);
            
            totalResult.textContent =
            "$" +
            (
                (inputBill.value * (itemTipActive.value / 100)) /
                    inputNumberPeople.value +
                parseInt(inputBill.value) / inputNumberPeople.value
            ).toFixed(2);
    
            resetContent = () => {
                inputBill.value = ''
                inputTip.value = ''
                inputNumberPeople.value = ''
                itemTipActive.classList.remove('active')
                tipAmountResult.textContent = "$0.00";
                totalResult.textContent = "$0.00";
        
                resetResultActive.classList.remove('active')
            };
    
            resetResultActive.addEventListener("click", resetContent);
        } catch {
            console.log('Invalid Input')
        }
    }
}

const fireResetButton = () => {
    if (inputBill.value !== '' && inputNumberPeople.value !== '') {
        resetResult.classList.add("active")
    }
}

itemTip.forEach((i) => {
    i.addEventListener("click", () => {
        itemTip.forEach((t) => {
            t.classList.remove("active");
        });
        i.classList.add("active");
        fireResetButton()
        calculateTip()
    });
});

inputBill.addEventListener('input', () => {
    fireResetButton()
    calculateTip()
})

inputTip.addEventListener('input', () => {
    fireResetButton()
    calculateTip()
})

inputNumberPeople.addEventListener('input', () => {
    fireResetButton()
    calculateTip()
})