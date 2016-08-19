import {Component} from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {NgModel} from '@angular/forms';
import {CountDown} from './countdown.component'

import {Navbar} from './navbar.component'
import {CrowdSale} from './sale.component'


@Component({
  selector: 'home',
  directives: [AlertComponent, DATEPICKER_DIRECTIVES, NgModel,CountDown,Navbar,CrowdSale],
  template: `
  <nav-bar></nav-bar>
    <header id="intro">
      <div class="container">
        <div class="table">
          <div class="header-text">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1><img src = "resources/img/logo.png" width="55%" height="auto"></h1>
              </div>
              <section class="content">
              <p class="subtitle" style="color:#fff">Time Left Until Crowdsale</p>

              <countdown inputDate="September 26, 2016 00:00:00">Loading...</countdown>
              <p class="subtitle">Find Out More About FirstBlood</p>
              <p><a class="btn btn-warning btn-block" style ="width:25%;font-size:1.20em;border: 1px solid darkgrey" href="/crowdsale"><i class="fa fa-youtube-play" aria-hidden="true"></i> Crowdsale Details</a></p>

              </section>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
})


export class HomeComponent {

}
