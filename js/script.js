//get HTML Elements


let form=document.querySelector('.form');
let inputDay=document.querySelector('.day input');
let inputMonth=document.querySelector('.month input');
let inputYear=document.querySelector('.year input');

//output elements to show result
let resultYear = document.querySelector('.result__years .calculated-value'); 
let resultMonth = document.querySelector('.result__months .calculated-value');
let resultDay = document.querySelector('.result__days .calculated-value');

//submit button
let btn = document.querySelector('.button__section button');

// getting the labels
let dayLabel = document.querySelector('.day label');
let monthLabel = document.querySelector('.month label')
let yearLabel = document.querySelector('.year label');

// error message
let dayError = document.querySelector('.error-message-day');
let monthError = document.querySelector('.error-message-month');
let yearError = document.querySelector('.error-message-year');



let isValid ="";

btn.addEventListener("click", (e)=>{
    console.log('clicked button')
    console.log(inputDay.value)
})

//Check if year is leap year
//change input to a new date like so:
function covertToDate(dateString) {
   return new Date(dateString);
}

//subtract from current year - https://github.com/AliSepar/Frontend-metor-challanges/blob/main/age-calculator-app-main/app.js
// helper - https://github.com/Nifix001/agecalculator/blob/master/app/page.tsx

function getFormattedDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}