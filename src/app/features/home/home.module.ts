import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@tap/shared/shared.module';

//StandAlone Components
import {
  CardFeatureContainerComponent,
  IntroComponent,
  NgbCarouselComponent,
  PrayerTimeComponent,
} from '@tap/standalone/components';

import { HomeComponent } from './home.component';

const STD_COMPONENTS = [
  CardFeatureContainerComponent,
  IntroComponent,
  NgbCarouselComponent,
  PrayerTimeComponent,
];

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
  imports: [RouterModule.forChild(routes), SharedModule, ...STD_COMPONENTS],
})
export class HomeModule {}
