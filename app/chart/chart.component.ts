import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'line-chart',
  directives: [CHART_DIRECTIVES],
  styles: [`
    .chart {
      display: block;
    }
  `],
  template: `
    <base-chart
      class="chart"
      [default]='defaults'
      [datasets]="datasets"
      [labels]="labels"
      [options]="options"
      [chartType]="'line'"
      [colors]="lineChartColours">
    </base-chart>
  `
})
export class Chart {
  private datasets = [
    {
      label: "Discount & Rate",
      data: [150.00, 150.00, 150.00,150.00,150.00,150.00,150.00, 133, 133, 133,133, 133, 133, 133, 117, 117, 117, 117, 117, 117, 117, 100.00, 100.00, 100.00,100.00,100.00,100.00,100.00],
      lineTension: 0
    }
  ];

  private labels = ['09/26', '09/27', '09/28', '09/29', '09/30', '10/01', '10/02', '10/03', '10/04', '10/05', '10/06', '10/07', '10/08', '10/09', '10/10', '10/11','10/12', '10/13','10/14','10/15','10/16','10/17','10/18', '10/19', '10/20', '10/21', '10/22','10/23', '10/24'];


  private lineChartColours:Array<any> = [
    { // greyrgb(248, 152, 29)
      backgroundColor: 'rgba(248,152,29,0.5)',
      borderColor: 'rgba(248,152,29,1)',
      pointBackgroundColor: 'rgba(248,152,29,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  private defaults = {
    defaultFontColor: '#ffffff'
  }
  private options = {
    scales: {
      scaleFontColor: "#ff0000",
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    title: {
            display: true,
            text: 'Pre-Sale Phases',
            fontColor: '#ffffff'
        },
    responsive:true,
    bezierCurve : false,
    legend: {
            display: true,
            labels: {
                fontColor: '#fff'
            }
        },
    defaultFontColor: '#fff'
  };
}
