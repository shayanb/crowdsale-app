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
var core_1 = require('@angular/core');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
//import { ROUTER_DIRECTIVES } from '@angular/router';
var forms_1 = require('@angular/forms');
var countdown_component_1 = require('./countdown.component');
// import {routing} from './app.routing';
var navbar_component_1 = require('./navbar.component');
var chart_component_1 = require('./chart/chart.component');
var CrowdSale = (function () {
    function CrowdSale() {
    }
    CrowdSale = __decorate([
        core_1.Component({
            selector: 'crowd-sale',
            directives: [ng2_bootstrap_1.AlertComponent, ng2_bootstrap_1.DATEPICKER_DIRECTIVES, forms_1.NgModel, countdown_component_1.CountDown, navbar_component_1.Navbar, chart_component_1.Chart],
            template: "\n  <header id=\"intro\">\n    <div class=\"container\">\n      <div class=\"table\">\n        <div class=\"header-text\">\n          <div class=\"row\">\n            <div class=\"col-md-12 text-center\" style = \"margin-top:-5%;\">\n              <h1><img src = \"resources/img/logo.png\" width=\"40%\" height=\"auto\"></h1>\n            </div>\n            <p class=\"subtitle\" style=\"color:#fff;margin-bottom:30px;\">CrowdSale Schedule</p>\n            <div class = \"col-md-8 col-md-offset-2\">\n              <p style=\"color:#E1E0E2; background-color:rgba(0,0,0,0.5); padding: 10px 15px 15px 10px\" >\n              The FirstBlood Token (FB\u0166) initial distribution will be in form of a pre-sale.\n              Participants will be able to acquire FB\u0166 at a discount rate by pledging ETH into the token sale smart contract.People who have other cryptocurrencies such as ETC, BTC or STEEM (or SBD) can create FB\u0166 via a third-party conversion service that will be available on the pre-sale page.\n              <br><br><img src = \"resources/img/crowd_funding.png\">\n              </p>\n            </div>\n            <div class = \"col-md-3 col-md-offset-2\">\n              <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                <thead class=\"tbl-header\"><tr><th>Period</th><th>Price</th></tr></thead>\n                <tbody class=\"tbl-content\">\n                  <tr><td>09/26-10/03</td><td>150:1</td></tr>\n                  <tr><td>10/03-10/10</td><td>133:1</td></tr>\n                  <tr><td>10/10-10/17</td><td>117:1</td></tr>\n                  <tr><td>10/17-10/24</td><td>100:1</td></tr>\n                </tbody>\n              </table>\n            </div>\n            <div class = \"col-md-6\">\n              <line-chart style = \"color:#ffffff\"></line-chart>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  <nav-bar></nav-bar>\n\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], CrowdSale);
    return CrowdSale;
}());
exports.CrowdSale = CrowdSale;
//# sourceMappingURL=sale.component.js.map