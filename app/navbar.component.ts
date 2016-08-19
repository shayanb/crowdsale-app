import {Component} from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'nav-bar',
  directives: [AlertComponent, DATEPICKER_DIRECTIVES, NgModel],
  template: `
  <nav-bar id ="navigation">
        <ul>
              <li><a href ="#"><i class="fa fa-home" aria-hidden="true"></i>Home</a></li>
              <li><a href ="https://github.com/firstbloodio/white_paper/blob/master/FirstBlood%20White%20Paper.pdf"><i class="fa fa-file-text-o" aria-hidden="true"></i>WhitePaper</a></li>
              <li style = "background-color:rgba(248, 152, 29, 0.40)"><a href = "/crowdsale"><i class="fa fa-hand-rock-o" aria-hidden="true"></i>Crowdsale</a></li>
              <li><a href><i class="fa fa-bar-chart" aria-hidden="true"></i>Stats</a></li>
              <li><a href = "https://firstblood.io/faq"><i class="fa fa-question-circle-o" aria-hidden="true"></i>FAQ</a></li>
              <li><a href = "https://slack.firstblood.io"><i class="fa fa-slack" aria-hidden="true"></i>Slack</a></li>
        </ul>
  </nav-bar>
  `,
})
export class Navbar {



}
