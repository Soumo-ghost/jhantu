// JavaScript for the Countdown Timer

        // Set the date we're counting down to (Riyaj's 20th Birthday: Dec 15, 2025)
        const countdownDate = new Date("Dec 15, 2025 00:00:00").getTime();
        const countdownElement = document.getElementById("countdown");
        const birthdayAlert = document.getElementById("birthday-alert");

        // Update the count down every 1 second
        const x = setInterval(function() {

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the countdown date
            const distance = countdownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in the countdown element
            countdownElement.innerHTML = `
                <div class="countdown-box">
                    <div class="countdown-time">${days}</div>
                    <div class="countdown-label">Days</div>
                </div>
                <div class="countdown-box">
                    <div class="countdown-time">${hours}</div>
                    <div class="countdown-label">Hours</div>
                </div>
                <div class="countdown-box">
                    <div class="countdown-time">${minutes}</div>
                    <div class="countdown-label">Minutes</div>
                </div>
                <div class="countdown-box">
                    <div class="countdown-time">${seconds}</div>
                    <div class="countdown-label">Seconds</div>
                </div>
            `;

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                countdownElement.style.display = 'none'; // Hide the timer
                birthdayAlert.style.display = 'block'; // Show the big birthday message
            }
        }, 1000);