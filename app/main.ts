import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component'
import {enableProdMode} from '@angular/core';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {APP_ROUTER_PROVIDERS} from './app.routing';

enableProdMode();

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), APP_ROUTER_PROVIDERS]);
