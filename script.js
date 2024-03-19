const clockContainer = document.querySelector('.clock-container');
const startButton = document.querySelector('.start-button');
const pauseButton = document.querySelector('.pause-button');
const resetButton = document.querySelector('.reset-button');
const resumeButton = document.querySelector('.resume-button');

let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  pauseButton.style.display = 'inline-block';
  resetButton.style.display = 'inline-block';

  startStopwatch();
});

pauseButton.addEventListener('click', () => {
  pauseButton.style.display = 'none';
  resumeButton.style.display = 'inline-block';
  
  clearInterval(intervalId);
});

resumeButton.addEventListener('click', () => {
  resumeButton.style.display = 'none';
  pauseButton.style.display = 'inline-block';

  startStopwatch();
});

resetButton.addEventListener('click', () => {
  pauseButton.style.display = 'none';
  resumeButton.style.display = 'none';
  resetButton.style.display = 'none';
  startButton.style.display = 'inline-block';

  hours = 0;
  minutes = 0;
  seconds = 0;

  clearInterval(intervalId);
  clockContainer.innerHTML = '00:00:00';
});

function startStopwatch() {
  intervalId = setInterval(() => {
    displayClock();
  }, 1000);
}

function displayClock() {
  seconds++;

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  if (hours < 10) {
    hours = `0${hours}`;
  }

  clockContainer.innerHTML = `${hours}:${minutes}:${seconds}`;

  seconds = Number(seconds);
  minutes = Number(minutes);
  hours = Number(hours);
}