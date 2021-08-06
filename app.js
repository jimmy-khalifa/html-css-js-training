const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre']

const date = new Date()

/**
 * 
 * @param {*} day 
 * @returns 
 */
const getDayOfWeek = (day) => {
    return days[day]
}

const getMonthName = (month) => {
    return months[month]
}

const getTheDate = (day, month) => {
    return getDayOfWeek(day) + ', ' + date.getDate() + ' ' + getMonthName(month) + ' ' + date.getFullYear()
}

const setFinalDate = () => {
    document.getElementById("today").innerHTML = getTheDate(date.getDay(), date.getMonth())
}

setFinalDate()