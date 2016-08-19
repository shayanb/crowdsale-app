//our root app component
import {Component, OnInit, ElementRef, Input} from '@angular/core'
import {Observable} from 'rxjs/Rx';

@Component({
selector: 'countdown',
template: `

<!-- Countdown timer -->
<div id="timer" class="is-countdown">
  <span class="countdown-row countdown-show4">

    <span class="countdown-section">
      <span class="countdown-amount">{{days}}</span>
      <span class="countdown-period">Days</span>
    </span>

    <span class="countdown-section">
      <span class="countdown-amount">{{hours}}</span>
      <span class="countdown-period">Hours</span>
    </span>

    <span class="countdown-section">
      <span class="countdown-amount">{{minutes}}</span>
      <span class="countdown-period">Minutes</span>
    </span>

    <span class="countdown-section">
      <span class="countdown-amount">{{seconds}}</span>
      <span class="countdown-period">Seconds</span>
    </span>

  </span>
</div>

`
})
export class CountDown implements OnInit {

  private future:Date;
  private futureString:string;
  private diff: Number;
  private days: string;
  private hours: string;
  private minutes: string;
  private seconds: string;


  constructor(elm: ElementRef) {
         this.futureString = elm.nativeElement.getAttribute('inputDate');
     }

   dhms(t){
      var days, hours, minutes, seconds;
      days = Math.floor(t / 86400);
      t -= days * 86400;
      hours = Math.floor(t / 3600) % 24;
      t -= hours * 3600;
      minutes = Math.floor(t / 60) % 60;
      t -= minutes * 60;
      seconds = t % 60;
      return [
              days, hours, minutes, seconds
            ]
   }


    ngOnInit() {
      this.future = new Date(this.futureString);
        Observable.interval(1000).map((x) => {
          this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
     }).subscribe((x) => {
             var dates = this.dhms(this.diff);
             this.days = dates[0];
             this.hours = dates[1];
             this.minutes = dates[2];
             this.seconds = dates[3];
           });
   }
 }
