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
var forms_1 = require('@angular/forms');
var countdown_component_1 = require('./countdown.component');
var navbar_component_1 = require('./navbar.component');
var sale_component_1 = require('./sale.component');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            directives: [ng2_bootstrap_1.AlertComponent, ng2_bootstrap_1.DATEPICKER_DIRECTIVES, forms_1.NgModel, countdown_component_1.CountDown, navbar_component_1.Navbar, sale_component_1.CrowdSale],
            template: "\n  <nav-bar></nav-bar>\n    <header id=\"intro\">\n      <div class=\"container\">\n        <div class=\"table\">\n          <div class=\"header-text\">\n            <div class=\"row\">\n              <div class=\"col-md-12 text-center\">\n                <h1><img src = \"resources/img/logo.png\" width=\"55%\" height=\"auto\"></h1>\n              </div>\n              <section class=\"content\">\n              <p class=\"subtitle\" style=\"color:#fff\">Time Left Until Crowdsale</p>\n\n              <countdown inputDate=\"September 26, 2016 00:00:00\">Loading...</countdown>\n              <p class=\"subtitle\">Find Out More About FirstBlood</p>\n              <p><a class=\"btn btn-warning btn-block\" style =\"width:25%;font-size:1.20em;border: 1px solid darkgrey\" href=\"/crowdsale\"><i class=\"fa fa-youtube-play\" aria-hidden=\"true\"></i> Crowdsale Details</a></p>\n\n              </section>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map