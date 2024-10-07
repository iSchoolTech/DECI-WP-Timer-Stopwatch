class Timer {
    start() {
        // Update the display every second using setInterval
        this.timerInterval = setInterval(() => this.updateTime(), 1000);  // Calls updateTime every second
    }

    restInterval() {
       clearInterval(this.timerInterval);  // Stop the timer from updating
   }
}