import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';

//change Languaje
import localeEsPE from '@angular/common/locales/es-PE';
import localeEsFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsPE);
registerLocaleData(localeEsFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    SalesModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
