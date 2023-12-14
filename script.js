const   days = document.getElementById('days');
const   hours = document.getElementById('hours');
const   mins = document.getElementById('mins');
const   sec = document.getElementById('sec');

const currentYear = new Date().getFullYear();

const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);

function updateTime(){
    const currentTime = new Date();
    const diff = newYear - currentTime;
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60) % 24;
    const m = Math.floor(diff/1000/60)    % 60;
    const s = Math.floor(diff/1000)       % 60;
    days.innerHTML  = d;
    hours.innerHTML = h;
    mins.innerHTML  = m;
    sec.innerHTML   = s;

}

setInterval(updateTime, 1000);