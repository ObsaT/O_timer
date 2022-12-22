const durationInput = document.querySelector("#durationInput");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const circle = document.querySelector('circle');
let radius = circle.getAttribute('r');
const perimeter = circle.getAttribute('r') * 2* Math.PI;
let duration;

circle.setAttribute('stroke-dasharray', perimeter)
const newTimer = new Timer(durationInput, startButton, pauseButton, {
  //callBacks
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', 
    perimeter * timeRemaining / duration - perimeter
    );
  },
  onComplete() {
    console.log("ticking stopped");
  },
});
