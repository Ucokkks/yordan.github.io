document.addEventListener("DOMContentLoaded", function () {
  const countdown = () => {
    const countDate = new Date("December 1, 2024 00:00:00").getTime();

    // Update countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = countDate - now;

      // Check if countdown is over
      if (gap <= 0) {
        clearInterval(interval);
        document.querySelector(".countdown").innerHTML =
          "<h2>Countdown Selesai!</h2>";
        return;
      }

      // Calculate remaining time in days, hours, minutes, and seconds
      const days = Math.floor(gap / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((gap % (1000 * 60)) / 1000);

      // Update HTML elements with remaining time
      document.querySelector(".day").innerText = days;
      document.querySelector(".hour").innerText = hours;
      document.querySelector(".minute").innerText = minutes;
      document.querySelector(".second").innerText = seconds;

      console.log(
        `Remaining time: ${days} days, ${hours} hours, 
        ${minutes} minutes, ${seconds} seconds`
      );
    }, 1000); // Update every second
  };

  countdown();
});
