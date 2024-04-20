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

const setError=(htmlElement, errorText)=>{
  htmlElement.innerHTML = errorText;
}

const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(parseInt(inputYear.value), parseInt(inputMonth.value) - 1, parseInt(inputDay.value));
    
    // Validate inputs
    isNaN(parseInt(inputDay.value)) || parseInt(inputDay.value) <= 0 || parseInt(inputDay.value) > 31 ? setError(dayError, "Must be a valid day") : setError(dayError, "") ;
    isNaN(parseInt(inputMonth.value)) || parseInt(inputMonth.value) <= 0 || parseInt(inputMonth.value) > 12 ? setError(monthError, "Invalid Month") : setError(monthError, "") ;
    parseInt(inputYear.value) > today.getFullYear() || isNaN(parseInt(inputYear.value)) ? setError(yearError, "Invalid year") : setError(yearError, "");

    

    

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
      days += tempDate.getDate();
    }

    console.log({ years, months, days })

    resultYear.innerHTML = years;
    resultMonth.innerHTML = months;
    resultDay.innerHTML = days;
  };


  btn.addEventListener("click", (e)=>{
    console.log('clicked button')
    console.log(calculateAge())
})



//helper functions if needed
function covertToDate(dateString) {
   return new Date(dateString);
}


function getFormattedDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}