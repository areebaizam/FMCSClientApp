import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Project Modules
import { RoutingModule } from '@tap/routing/routing.module';
import { CoreModule } from '@tap/core/core.module';
import { SharedModule } from '@tap/shared/shared.module';

//Core Components
import { SubFooterComponent } from '@tap/core/components';

import { AppComponent } from './app.component';

const EAGER_MODULES = [RoutingModule, CoreModule, SharedModule];
const STD_CORE_COMPONENTS = [SubFooterComponent];
@NgModule({
  declarations: [AppComponent],
  imports: [
    // RoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule, //CAVEAT: Must be in same module as BrowserModule instead of material module
    ...EAGER_MODULES,
    ...STD_CORE_COMPONENTS,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
