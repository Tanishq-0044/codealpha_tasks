let startTime = null;
let elapsedTime = 0;
let timerInterval = null;

export function start() {
  if (timerInterval) {
    console.log('Stopwatch is already running.');
    return;
  }
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    displayTime();
  }, 100);
  console.log('Stopwatch started.');
}

export function stop() {
  if (!timerInterval) {
    console.log('Stopwatch is not running.');
    return;
  }
  clearInterval(timerInterval);
  timerInterval = null;
  console.log('Stopwatch stopped.');
}

export function reset() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  elapsedTime = 0;
  startTime = null;
  displayTime();
  console.log('Stopwatch reset.');
}

function displayTime() {
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const milliseconds = elapsedTime % 1000;
    const display = `${String(hours).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}.${String(Math.floor(milliseconds / 10)).padStart(2, '0')}`;
  
    // Clear the line before writing the updated time
    process.stdout.write('\r' + display);
  }
  
