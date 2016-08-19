"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [forms_1.disableDeprecatedForms(), forms_1.provideForms(), app_routing_1.APP_ROUTER_PROVIDERS]);
//# sourceMappingURL=main.js.map