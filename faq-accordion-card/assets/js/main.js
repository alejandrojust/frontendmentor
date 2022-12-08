const cardQuestion = document.querySelectorAll(".card__question");
const cardPicture = document.querySelector(".card__picture");

cardQuestion.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        } else {
            item.classList.add("active");
        }
    });
});
