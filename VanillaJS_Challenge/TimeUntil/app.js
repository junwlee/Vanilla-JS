const clockTitle = document.querySelector(".js-clock");

function dDayChecker () {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25);
    const dDay = String(Math.ceil((christmas - today) / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hours = String(Math.floor((christmas - today / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((christmas - today / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((christmas - today / 1000) % 60)).padStart(2, "0");

    clockTitle.innerText = `${dDay}d ${hours}h ${minutes}m ${seconds}s`
}

dDayChecker();
setInterval(dDayChecker, 1000);