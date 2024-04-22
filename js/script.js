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



let isValidDay = false;
let isValidMonth = false;
let isValidYear = false;


const checkFor30dayMonth=(day, month)=>{
    //February days check
    if (day && month == 2) {
        if (day>=30) {
            return true;
        }else{
            return false;
        }
    }
    //30 day month check - April, June, September, November
    if (day && (month==4 || month==6 || month==9 || month==11)) {
        if (day>=31) {
            return true;
        }else{
            return false;
        }
    }
    return false;
}


const validateInputs = (today) => {
    // Validate day input
    isNaN(parseInt(inputDay.value)) || parseInt(inputDay.value) <= 0 || parseInt(inputDay.value) > 31 ? setError("day", dayError, "Must be a valid day", true) : setError("day", dayError, "", false ) ;

     // Validate month input
    isNaN(parseInt(inputMonth.value)) || parseInt(inputMonth.value) <= 0 || parseInt(inputMonth.value) > 12 || checkFor30dayMonth(parseInt(inputDay.value), parseInt(inputMonth.value))? setError("month",monthError, "Must be a valid month", true) : setError("month", monthError, "", false) ;
    
    //validate year input
    parseInt(inputYear.value) > today.getFullYear() || isNaN(parseInt(inputYear.value)) || parseInt(inputYear.value) <= 0 ? setError("year", yearError, "Must be in the past and valid", true) : setError("year", yearError, "", false);
}


const setError=(time, htmlElement, errorText, status)=>{
  htmlElement.innerHTML = errorText;

  if (time=="day") {
    if (time=="day" && status==false) {
        isValidDay = true;
        //remove error classes
        inputDay.classList.remove("error-input");
        dayLabel.classList.remove("error");
    }else {
        isValidDay = false;
        //add error classes to label and input
        inputDay.classList.add("error-input");
        dayLabel.classList.add("error");
    }
  } else if(time=="month") {
    if (time=="month" && status==false) {
        isValidMonth = true;
        //remove error classes 
        monthLabel.classList.remove("error");
        inputMonth.classList.remove("error-input");
    } else {
        isValidMonth = false;
        //add error classes 
        monthLabel.classList.add("error");
        inputMonth.classList.add("error-input");
    }
  } else if(time=="year") {
    if (time=="year" && status==false) {
        isValidYear = true;
        //remove error classes
        yearLabel.classList.remove("error");
        inputYear.classList.remove("error-input");
    } else {
        isValidYear = false;
        //add error classes
        yearLabel.classList.add("error");
        inputYear.classList.add("error-input");
    }
  }
}

const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(parseInt(inputYear.value), parseInt(inputMonth.value) - 1, parseInt(inputDay.value));

    validateInputs(today);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 && (months === 0 && today.getDate() < birthDate.getDate())) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
      days += tempDate.getDate();
    }

    if (!isValidDay || !isValidMonth || !isValidYear) {
      resultYear.innerHTML = '- -';
      resultMonth.innerHTML = '- -';
      resultDay.innerHTML = '- -';
    } else {
      resultYear.innerHTML = years;
      resultMonth.innerHTML = months;
      resultDay.innerHTML = days;
    }
    
    console.log({'validDay': isValidDay, 'validMonth' :isValidMonth, 'validYear':isValidYear});
    console.log({ years, months, days });
  };


  btn.addEventListener("click", (e)=>{
    console.log('clicked button')
    console.log(calculateAge())
})