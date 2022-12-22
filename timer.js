class Timer {
    constructor(durationInput, startButton, pauseButton, callBacks) {
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
      //callbacks
      if (callBacks) {
        this.onStart = callBacks.onStart;
        this.onTick = callBacks.onTick;
        this.onComplete = callBacks.onComplete;
      }
      this.startButton.addEventListener("click", this.start);
      this.pauseButton.addEventListener("click", this.pause);
    }
    start = () => {
      if (this.onStart) {
        this.onStart(this.timeRemaining);
      }
      this.thick();
      this.timer = setInterval(this.thick, 20);
    };
    thick = () => {
      if (this.timeRemaining <= 0) {
        this.pause();
      } else {
        this.timeRemaining = this.timeRemaining - 0.02;
        if (this.onTick) {
          this.onTick(this.timeRemaining);
        }
      }
    };
    pause = () => {
      clearInterval(this.timer);
      if (this.onComplete) {
        this.onComplete();
      }
    };
    get timeRemaining() {
      return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time) {
      this.durationInput.value = time.toFixed(2);
    }
  }