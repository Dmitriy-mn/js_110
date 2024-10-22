/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */


const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");

class Timer {
    constructor({ onTick }) {
        this.isActive = false;
        this.onTick = onTick;
        this.intervalId = null;

        this.init();
    }

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    start() {
        if(this.isActive) {
            return;
        }

        this.isActive = true;
        const startTime = Date.now();

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);

            this.onTick(time);
        }, 1000)
    }

    getTimeComponents(time) {
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        
        return { hours, mins, secs };
    }

    pad(value) {
        return String(value).padStart(2, "0");
    }

}


const timer = new Timer({
    onTick: updateClockfase
});

startBtn.addEventListener("click", timer.start.bind(timer));
stopBtn.addEventListener("click", timer.stop.bind(timer));

function updateClockfase({ hours, mins, secs }) {
    clockface.textContent = `${hours}:${mins}:${secs}`;
}



// let isActive = false;
// let intervalId = null;

// init();

// function start() {
//     if(isActive) {
//         return;
//     }

//     isActive = true;
//     const startTime = Date.now();

//     intervalId = setInterval(() => {
//         const currentTime = Date.now();
//         const deltaTime = currentTime - startTime;
//         const time = getTimeComponents(deltaTime);

//         onTick(time);
//     }, 1000)
// }

// function getTimeComponents(time) {
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
//     return { hours, mins, secs };
// }

// function pad(value) {
//     return String(value).padStart(2, "0");
// }

// function stop() {
//     clearInterval(intervalId);
//     isActive = false;
//     const time = getTimeComponents(0);
//     onTick(time);
// }

// function init() {
//     const time = getTimeComponents(0);
//     onTick(time);
// }

// function onTick({ hours, mins, secs }) {
//     clockface.textContent = `${hours}:${mins}:${secs}`;
// }

// startBtn.addEventListener("click", start);
// stopBtn.addEventListener("click", stop);