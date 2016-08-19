import {Component} from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
//import { ROUTER_DIRECTIVES } from '@angular/router';
import {NgModel} from '@angular/forms';
import {CountDown} from './countdown.component'
// import {routing} from './app.routing';
import {Navbar} from './navbar.component'
import {Chart} from './chart/chart.component'


@Component({
  selector: 'crowd-sale',
  directives: [AlertComponent, DATEPICKER_DIRECTIVES, NgModel,CountDown,Navbar,Chart],
  template: `
  <header id="intro">
    <div class="container">
      <div class="table">
        <div class="header-text">
          <div class="row">
            <div class="col-md-12 text-center" style = "margin-top:-5%;">
              <h1><img src = "resources/img/logo.png" width="40%" height="auto"></h1>
            </div>
            <p class="subtitle" style="color:#fff;margin-bottom:30px;">CrowdSale Schedule</p>
            <div class = "col-md-8 col-md-offset-2">
              <p style="color:#E1E0E2; background-color:rgba(0,0,0,0.5); padding: 10px 15px 15px 10px" >
              The FirstBlood Token (FBŦ) initial distribution will be in form of a pre-sale.
              Participants will be able to acquire FBŦ at a discount rate by pledging ETH into the token sale smart contract.People who have other cryptocurrencies such as ETC, BTC or STEEM (or SBD) can create FBŦ via a third-party conversion service that will be available on the pre-sale page.
              <br><br><img src = "resources/img/crowd_funding.png">
              </p>
            </div>
            <div class = "col-md-3 col-md-offset-2">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead class="tbl-header"><tr><th>Period</th><th>Price</th></tr></thead>
                <tbody class="tbl-content">
                  <tr><td>09/26-10/03</td><td>150:1</td></tr>
                  <tr><td>10/03-10/10</td><td>133:1</td></tr>
                  <tr><td>10/10-10/17</td><td>117:1</td></tr>
                  <tr><td>10/17-10/24</td><td>100:1</td></tr>
                </tbody>
              </table>
            </div>
            <div class = "col-md-6">
              <line-chart style = "color:#ffffff"></line-chart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <nav-bar></nav-bar>

  `,
})
export class CrowdSale {

}
