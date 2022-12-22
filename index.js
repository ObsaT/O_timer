const durationInput = document.querySelector("#durationInput");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const newTimer = new Timer(durationInput, startButton, pauseButton, {
  //callBacks
  onStart() {
    console.log("timer Started");
  },
  onTick() {
    console.log("time is ticking");
  },
  onComplete() {
    console.log("ticking stopped");
  },
});
