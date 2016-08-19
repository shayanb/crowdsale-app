"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//our root app component
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var CountDown = (function () {
    function CountDown(elm) {
        this.futureString = elm.nativeElement.getAttribute('inputDate');
    }
    CountDown.prototype.dhms = function (t) {
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
        ];
    };
    CountDown.prototype.ngOnInit = function () {
        var _this = this;
        this.future = new Date(this.futureString);
        Rx_1.Observable.interval(1000).map(function (x) {
            _this.diff = Math.floor((_this.future.getTime() - new Date().getTime()) / 1000);
        }).subscribe(function (x) {
            var dates = _this.dhms(_this.diff);
            _this.days = dates[0];
            _this.hours = dates[1];
            _this.minutes = dates[2];
            _this.seconds = dates[3];
        });
    };
    CountDown = __decorate([
        core_1.Component({
            selector: 'countdown',
            template: "\n\n<!-- Countdown timer -->\n<div id=\"timer\" class=\"is-countdown\">\n  <span class=\"countdown-row countdown-show4\">\n\n    <span class=\"countdown-section\">\n      <span class=\"countdown-amount\">{{days}}</span>\n      <span class=\"countdown-period\">Days</span>\n    </span>\n\n    <span class=\"countdown-section\">\n      <span class=\"countdown-amount\">{{hours}}</span>\n      <span class=\"countdown-period\">Hours</span>\n    </span>\n\n    <span class=\"countdown-section\">\n      <span class=\"countdown-amount\">{{minutes}}</span>\n      <span class=\"countdown-period\">Minutes</span>\n    </span>\n\n    <span class=\"countdown-section\">\n      <span class=\"countdown-amount\">{{seconds}}</span>\n      <span class=\"countdown-period\">Seconds</span>\n    </span>\n\n  </span>\n</div>\n\n"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CountDown);
    return CountDown;
}());
exports.CountDown = CountDown;
//# sourceMappingURL=countdown.component.js.map