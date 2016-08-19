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
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var Chart = (function () {
    function Chart() {
        this.datasets = [
            {
                label: "Discount & Rate",
                data: [150.00, 150.00, 150.00, 150.00, 150.00, 150.00, 150.00, 133, 133, 133, 133, 133, 133, 133, 117, 117, 117, 117, 117, 117, 117, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00, 100.00],
                lineTension: 0
            }
        ];
        this.labels = ['09/26', '09/27', '09/28', '09/29', '09/30', '10/01', '10/02', '10/03', '10/04', '10/05', '10/06', '10/07', '10/08', '10/09', '10/10', '10/11', '10/12', '10/13', '10/14', '10/15', '10/16', '10/17', '10/18', '10/19', '10/20', '10/21', '10/22', '10/23', '10/24'];
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(248,152,29,0.5)',
                borderColor: 'rgba(248,152,29,1)',
                pointBackgroundColor: 'rgba(248,152,29,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.defaults = {
            defaultFontColor: '#ffffff'
        };
        this.options = {
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
            responsive: true,
            bezierCurve: false,
            legend: {
                display: true,
                labels: {
                    fontColor: '#fff'
                }
            },
            defaultFontColor: '#fff'
        };
    }
    Chart = __decorate([
        core_1.Component({
            selector: 'line-chart',
            directives: [ng2_charts_1.CHART_DIRECTIVES],
            styles: ["\n    .chart {\n      display: block;\n    }\n  "],
            template: "\n    <base-chart\n      class=\"chart\"\n      [default]='defaults'\n      [datasets]=\"datasets\"\n      [labels]=\"labels\"\n      [options]=\"options\"\n      [chartType]=\"'line'\"\n      [colors]=\"lineChartColours\">\n    </base-chart>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Chart);
    return Chart;
}());
exports.Chart = Chart;
//# sourceMappingURL=chart.component.js.map