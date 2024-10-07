// Step 1. Create a Timer class

// Step 2. Implement the timer's constructor to initialize startTime, elapsedTime, and control its state.

// Step 3. Implement the start() method to begin the timer and adjusting startTime 

// Step 4. Continue implementing the start() method by copying the last line below and the restInterval() method from the file called 'Step4'.

// Step 5. Implement the stop() method by stopping the timer, saving the elapsed time, and updating the running state.

// Step 6. Implement the reset() method to stop the timer, reset all time-related properties, and update the display.

// Step 7. Copy the rest of the methods from the file called "Step7"




// Instantiate the Timer class
const timer = new Timer();

// Hook up buttons with their respective methods
document.getElementById("startButton").addEventListener("click", () => timer.start());
document.getElementById("stopButton").addEventListener("click", () => timer.stop());
document.getElementById("resetButton").addEventListener("click", () => timer.reset());
