//Check if year is leap year


//change input to a new date like so:
function covertToDate(dateString) {
   return new Date(dateString);
}

//subtract from current year - https://github.com/AliSepar/Frontend-metor-challanges/blob/main/age-calculator-app-main/app.js

export function getFormattedDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}