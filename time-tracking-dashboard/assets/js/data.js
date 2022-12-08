const cardTitle = document.querySelectorAll('.card__title')
const currentDailyHours = document.querySelectorAll('#daily .current__hours')
const previousDailyHours = document.querySelectorAll('#daily .previous__hours')
const currentWeeklyHours = document.querySelectorAll('#weekly .current__hours')
const previousWeeklyHours = document.querySelectorAll('#weekly .previous__hours')
const currentMonthlyHours = document.querySelectorAll('#monthly .current__hours')
const previousMonthlyHours = document.querySelectorAll('#monthly .previous__hours')

const getData = async() => {
    const res = await fetch('./assets/data/data.json')
    const data = await res.json()

    for (let i = 0; i < cardTitle.length; i++) {
        cardTitle[i].innerHTML = data[i].title
        // daily timeframe
        currentDailyHours[i].innerHTML = `${data[i].timeframes.daily.current}hrs`
        previousDailyHours[i].innerHTML = `Last Day - ${data[i].timeframes.daily.previous}hrs`
        // weekly timeframe
        currentWeeklyHours[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`
        previousWeeklyHours[i].innerHTML = `Last Week - ${data[i].timeframes.weekly.previous}hrs`
        // monthly timeframe
        currentMonthlyHours[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`
        previousMonthlyHours[i].innerHTML = `Last Month - ${data[i].timeframes.monthly.previous}hrs`
    }
}

export default { getData }