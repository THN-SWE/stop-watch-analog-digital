//inspired from
// https://www.geeksforgeeks.org/how-to-create-analog-clock-using-html-css-and-javascript/

let min_rotation = [0];
let sec_rotation = [0];
let isStopped = false;
let isRunning = false;
let intervalId = null; // to prevent running multiple intervals a time

// hands
const minute = document.getElementById("minute");
const second = document.getElementById("second");

// digital
const minuteSpan = document.getElementById("minutes");
const secondSpan = document.getElementById("seconds");
const millisecondSpan = document.getElementById("milliseconds");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function updateClock() {
  if (isRunning) {
    sec_rotation[0] += 0.06;
    milliseconds += 10;

    if (milliseconds >= 1000) {
      seconds++;
      milliseconds = 0;
    }
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }

    if (sec_rotation[0] % 360 == 0) {
      min_rotation[0] += 0.06;
      // min_rotation[0] %= 360;
    }

    minute.style.transform = `rotate(${min_rotation[0]}deg)`;
    second.style.transform = `rotate(${sec_rotation[0]}deg)`;

    minuteSpan.innerHTML = minutes;
    secondSpan.innerHTML = seconds;
    millisecondSpan.innerHTML = milliseconds;
  }

  //   console.log(minutes, seconds, milliseconds);
}

function start() {
  if (!isRunning) {
    intervalId = setInterval(updateClock, 10); // Start the clock
  }
  isRunning = true;
}

function stop_reset() {
  if (!isStopped && isRunning) {
    isStopped = true;
    isRunning = false;
    clearInterval(intervalId); // Stop the clock
    console.log(isStopped, isRunning); //working
  } else {
    isStopped = false;
    console.log(isStopped);
    sec_rotation[0] = 0; // Reset seconds rotation
    min_rotation[0] = 0; // Reset minutes rotation}

    minute.style.transform = `rotate(${min_rotation[0]}deg)`;
    second.style.transform = `rotate(${sec_rotation[0]}deg)`;

    minuteSpan.innerHTML = "00";
    secondSpan.innerHTML = "00";
    millisecondSpan.innerHTML = "00";

    minutes = 0;
    seconds = 0;
    milliseconds = 0;
  }
  isStopped = false;
  isRunning = false;
}
