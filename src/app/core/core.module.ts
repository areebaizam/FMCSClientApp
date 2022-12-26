import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@tap/shared/shared.module';

//StandAlone Components
import { BtnIconColComponent, BtnIconNavComponent, BtnIconRowComponent} from '@tap/standalone/components';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const STD_SHRD_COMPONENTS = [
  BtnIconColComponent,
  BtnIconNavComponent,
  BtnIconRowComponent,
]
const CORE_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidenavComponent,
]

@NgModule({
  declarations: [
    ...CORE_COMPONENTS,
  ],
  imports: [
    RouterModule,
    SharedModule,
    ...STD_SHRD_COMPONENTS,
  ],
  exports:[
    ...CORE_COMPONENTS,
  ]

})
export class CoreModule { }
