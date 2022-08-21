const hour = document.querySelector('[data-hour-hand]');
const minute = document.querySelector('[data-minute-hand]');
const second = document.querySelector('[data-second-hand]');

setInterval(updateClock,1000);

function updateClock() {
let date = new Date()
let sec = date.getSeconds()/60

let min = (date.getMinutes() + sec) / 60;

let hr = (date.getHours() + min) / 12;


hour.style.transform = "rotate(" + (hr * 360) + "deg)";
minute.style.transform ="rotate(" + (min * 360) + "deg)";
second.style.transform = "rotate(" + (sec * 360) + "deg)";
}
updateClock();