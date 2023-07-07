import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent{


  displayTime = '00:00';
  timer: any;


  updateTime(buttonValue: string) {
    if (buttonValue === 'Start') {
      if (this.displayTime !== '00:00') {
        this.startTimer();
      }
    } else if (buttonValue === 'Cancel') {
      this.resetTimer();
    } else {
      this.updateDisplayTime(buttonValue);
    }
  }


  startTimer() {
    const timeArray = this.displayTime.split(':');
    const minutes = parseInt(timeArray[0], 10);
    const seconds = parseInt(timeArray[1], 10);
    let totalSeconds = minutes * 60 + seconds;


    this.timer = setInterval(() => {
      totalSeconds--;


      if (totalSeconds <= 0) {
        this.resetTimer();
      }


      const newMinutes = Math.floor(totalSeconds / 60);
      const newSeconds = totalSeconds % 60;
      this.displayTime = `${this.formatTime(newMinutes)}:${this.formatTime(newSeconds)}`;
    }, 1000);
  }


  resetTimer() {
    clearInterval(this.timer);
    this.displayTime = '00:00';
  }


  updateDisplayTime(buttonValue: string) {
    if (this.displayTime === '00:00') {
      this.displayTime = buttonValue;
    } else if (this.displayTime.length < 4) {
      this.displayTime += buttonValue;
    }
  }


  formatTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }
}

