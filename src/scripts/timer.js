export default class Timer {
  constructor() {
    this.startTime = new Date();
    this.time = "00:00";
    this.started = false;
  }

  startTimer() {
    if (!this.started) {
      this.timerInterval = setInterval(() => {
        let currentTime = this.getTime();
        this.time = this.refactorTime(currentTime);
        this.pastTime = this.time;
        console.log(this.time);
      }, 1000);
    }
    if (!this.started) this.started = true;
  }

  getTime() {
    return Math.floor((new Date() - this.startTime) / 1000);
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
