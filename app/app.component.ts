import {Component} from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {NgModel} from '@angular/forms';
import {CountDown} from './countdown.component'
// import {routing} from './app.routing';
import {Navbar} from './navbar.component'
import {CrowdSale} from './sale.component'


@Component({
  selector: 'my-app',
  directives: [AlertComponent, DATEPICKER_DIRECTIVES, NgModel,CountDown,Navbar,CrowdSale, ROUTER_DIRECTIVES],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

}
