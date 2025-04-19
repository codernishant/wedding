
// Countdown timer
const timer = document.getElementById('timer');
const weddingDate = new Date("June 6, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        timer.innerHTML = "It's Wedding Day!";
    }
}

setInterval(updateCountdown, 1000);
