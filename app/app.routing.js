"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var sale_component_1 = require('./sale.component');
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: "crowdsale",
        component: sale_component_1.CrowdSale
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routing.js.map