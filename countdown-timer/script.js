const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "jan 1, 2024 12:00:00";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate);
    
    // const totalSeconds = console.log(newYearsDate - currentDate)
    
   
    const days = Math.floor(totalSeconds / (24*60*60*1000));
    const hours = Math.floor((totalSeconds%(24*60*60*1000))/(60*60*1000))
    const mins = Math.floor((totalSeconds % (60*60*1000))/(60*1000))
    const seconds = Math.floor((totalSeconds % (60*1000))/(1000))

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);


// console.log(Math.floor(6975874053)/1000 );