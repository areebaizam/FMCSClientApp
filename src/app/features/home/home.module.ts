import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@tap/shared/shared.module';

//Shared StandAlone Components
import { NgbCarouselComponent } from '@tap/standalone/components';
//Shared StandAlone Containers
import { SmallWidgetsComponent } from '@tap/standalone/containers';

import { HomeComponent } from './home.component';

//StandAlone Containers
import {
  FeaturesComponent,
  MainComponent,
  SupportComponent
} from './containers';

const STD_SHRD_COMPONENTS = [NgbCarouselComponent, SmallWidgetsComponent];

const STD_CONTAINERS = [FeaturesComponent, MainComponent, SupportComponent];

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        // data: {
        //   seo: {
        //     title: `Car Rental - Vancouver`,
        //     description: `Hassle free 24x7 availability of Car with flexible delivery options, pick-up including YVR Airport and other prime locations around Vancouver`,
        //     image: '/assets/images/car-rental-seo.jpg',
        //     author: 'The Aleph Inc.',
        //     type:'website'
        //   },
        // },
      },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    ...STD_SHRD_COMPONENTS,
    ...STD_CONTAINERS,
  ],
})
export class HomeModule {}
