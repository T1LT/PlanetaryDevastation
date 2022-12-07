export default class Timer {
  constructor() {
    this.time = "00:00";
    this.started = false;
  }

  startTimer(time) {
    if (!this.started) {
      this.startTime = time || new Date();
      this.timerInterval = setInterval(() => {
        let currentTime = this.getTime(this.startTime);
        this.time = this.refactorTime(currentTime);
        // console.log(this.time);
      }, 1000);
    }
    if (!this.started) this.started = true;
  }

  getTime(time) {
    return Math.floor((new Date() - time) / 1000);
  }

  refactorTime(time) {
    if (time < 60) {
      if (time < 10) return `00:0${time}`;
      else return `00:${time}`;
    } else {
      let min = Math.floor(time / 60);
      let sec = time % 60;
      if (min < 10 && sec < 10) {
        return `0${min}:0${sec}`;
      } else if (min < 10 && sec >= 10) {
        return `0${min}:${sec}`;
      } else if (min >= 10 && sec < 10) {
        return `${min}:0${sec}`;
      } else {
        return `${min}:${sec}`;
      }
    }
  }

  endTimer() {
    clearInterval(this.timerInterval);
  }
}
