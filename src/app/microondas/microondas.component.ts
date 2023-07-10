import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent {

  public timer: number = 0;
  public isRunning: boolean = false;
  public interval: any;


  addNumber(number: number) {
    if (!this.isRunning) {
      this.timer = this.timer * 10 + number;
    }
  }

  add30Seconds() {
    this.timer += 3 * 10;
  }

  add1Minute() {
    this.timer += 6 * 10;
  }

  resetTimer() {
    clearInterval(this.interval);
    this.isRunning = false;
    this.timer = 0;
  }


  startTimer(timeInSeconds: number) {
    if (!this.isRunning && timeInSeconds > 0) {
      this.timer = timeInSeconds;
      this.isRunning = true;
      this.interval = setInterval(() => {
        this.timer--;
        if (this.timer <= 0) {
          this.resetTimer();
        }
      }, 1000);
    }
  }


  displayTimer(): string {
    let minutes = Math.floor(this.timer / 60);
    let seconds = this.timer % 60;

    return `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
  }


  padNumber(number: number): string {
    return number.toString().padStart(2, '0');
  }
}