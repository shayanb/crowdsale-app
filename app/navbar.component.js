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
var Navbar = (function () {
    function Navbar() {
    }
    Navbar = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            directives: [ng2_bootstrap_1.AlertComponent, ng2_bootstrap_1.DATEPICKER_DIRECTIVES, forms_1.NgModel],
            template: "\n  <nav-bar id =\"navigation\">\n        <ul>\n              <li><a href =\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>Home</a></li>\n              <li><a href =\"https://github.com/firstbloodio/white_paper/blob/master/FirstBlood%20White%20Paper.pdf\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>WhitePaper</a></li>\n              <li style = \"background-color:rgba(248, 152, 29, 0.40)\"><a href = \"/crowdsale\"><i class=\"fa fa-hand-rock-o\" aria-hidden=\"true\"></i>Crowdsale</a></li>\n              <li><a href><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>Stats</a></li>\n              <li><a href = \"https://firstblood.io/faq\"><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i>FAQ</a></li>\n              <li><a href = \"https://slack.firstblood.io\"><i class=\"fa fa-slack\" aria-hidden=\"true\"></i>Slack</a></li>\n        </ul>\n  </nav-bar>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], Navbar);
    return Navbar;
}());
exports.Navbar = Navbar;
//# sourceMappingURL=navbar.component.js.map