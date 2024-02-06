let timer;
let isRunning = false;
let milliseconds = 0;

// Function to start the stopwatch
function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    // Update the timer every 10 milliseconds
    timer = setInterval(updateTimer, 10);
  }
}

// Function to stop the stopwatch
function stopStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

// Function to reset the stopwatch
function resetStopwatch() {
  stopStopwatch();
  // Reset milliseconds to zero
  milliseconds = 0;
  // Update the display
  updateDisplay();
}

// Function to update the timer
function updateTimer() {
  // Increment milliseconds by 10 (update every 10 milliseconds)
  milliseconds += 10;
  // Update the display
  updateDisplay();
}

// Function to update the display with formatted time
function updateDisplay() {
  const display = document.getElementById('display');
  // Calculate hours, minutes, seconds, and milliseconds
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const secs = Math.floor((milliseconds % 60000) / 1000);
  const millisecs = milliseconds % 1000;

  // Format the time as HH:MM:SS.SSS
  const formattedTime =
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(millisecs).padStart(3, '0')}`;

  // Update the display element
  display.innerText = formattedTime;
}
