import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { I18nModule } from './i18n';
import { VexModule } from '../@vex/vex.module';
import { AppComponent } from './app.component';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { DashboardModule } from './dashboard';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // ngx-translate
    TranslateModule.forRoot(),
    I18nModule,

    // Vex
    VexModule,
    CustomLayoutModule,

    CoreModule,
    SharedModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
