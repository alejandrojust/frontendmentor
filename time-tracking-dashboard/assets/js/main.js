import data from '../js/data.js'

const itemTimeframe = document.querySelectorAll('.item__timeframe')
const dataHours = document.querySelectorAll('.data__hours')
const daily = document.querySelectorAll('#daily')
const weekly = document.querySelectorAll('#weekly')
const monthly = document.querySelectorAll('#monthly')

itemTimeframe.forEach(i => {
    i.addEventListener('click', () => {
        itemTimeframe.forEach(e => {
            if (e.classList.contains('active')) {
                e.classList.remove('active')
            }
        })

        i.classList.add('active')

        dataHours.forEach(t => {
            if (t.classList.contains('active')) {
                t.classList.remove('active')
            }
        })

        if (i.innerText === 'Daily') {
            daily.forEach(d => {
                d.classList.add('active')
            })
        } else if (i.innerText === 'Weekly') {
            weekly.forEach(w => {
                w.classList.add('active')
            })
        } else if (i.innerText === 'Monthly') {
            monthly.forEach(m => {
                m.classList.add('active')
            })
        }
    })
})

data.getData()