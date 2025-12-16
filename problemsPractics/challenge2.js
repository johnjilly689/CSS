// countdown from 10 to 0 every second, and when it reaches 0, print "Lightoff" and stop the countdown.
let count = 10;
const countdown = setInterval(() => {
  count--;
  console.log(count);
  if (count === 0) {
    console.log("Lightoff");
    clearInterval(countdown);
  }
}, 1000);
