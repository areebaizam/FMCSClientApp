import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Project Modules
import { RoutingModule } from '@tap/routing/routing.module';
import { CoreModule } from '@tap/core/core.module';
import { SharedModule } from '@tap/shared/shared.module';

import { AppComponent } from './app.component';

const EAGER_MODULES = [RoutingModule, CoreModule, SharedModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    // RoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule, //CAVEAT: Must be in same module as BrowserModule instead of material module
    ...EAGER_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
