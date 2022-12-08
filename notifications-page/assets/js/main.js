paraNotifications = document.querySelector(".para__notifications").addEventListener('click', () => {
    document.querySelector(".number__notifications").textContent = '0'
    
    notification__card = document.querySelectorAll(".notification__card.active").forEach((e) => {
        e.classList.remove('active')
    })

    unread__card = document.querySelectorAll('.unread__card.active').forEach((e) => {
        e.classList.remove('active')
    })
})
