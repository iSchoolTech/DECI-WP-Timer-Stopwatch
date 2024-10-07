class Timer {
    updateTime() {
        // Calculate how much time has passed since the timer started
        this.elapsedTime = Date.now() - this.startTime;

        // Convert elapsed time (milliseconds) into seconds, minutes, and hours
        const seconds = Math.floor((this.elapsedTime / 1000) % 60);
        const minutes = Math.floor((this.elapsedTime / (1000 * 60)) % 60);
        const hours = Math.floor((this.elapsedTime / (1000 * 60 * 60)) % 24);

        // Display the updated time on the webpage
        this.displayTime(hours, minutes, seconds);
    }

    displayTime(hours, minutes, seconds) {
        // Display formatted time on the webpage
        document.getElementById("timerDisplay").innerText = 
            `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
    }

    pad(number) {
        // Ensure double digits (e.g. 09 instead of 9)
        return number < 10 ? '0' + number : number;
    }
}