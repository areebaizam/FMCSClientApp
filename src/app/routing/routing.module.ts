import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { eRouteURL } from '@tap/shared/models/common';
// import { NotFoundComponent } from '../shared/components';

const routes: Routes = [
  {
    path: '',
    redirectTo: eRouteURL.HOME,
    pathMatch: 'full'
  },
  {
    path: eRouteURL.HOME,
    loadChildren: () =>
      import('@tap/features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: eRouteURL.CONTACT,
    loadChildren: () =>
      import('@tap/features/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: eRouteURL.DONATE,
    loadChildren: () =>
      import('@tap/features/donate/donate.module').then(
        (m) => m.DonateModule
      ),
  },
  {
    path: eRouteURL.PRAYER,
    loadChildren: () =>
      import('@tap/features/prayer/prayer.module').then(
        (m) => m.PrayerModule
      ),
  },
  // {
  //   path: '',
  //   redirectTo: eRouteURL.HOME,
  // },

  //TODO Uncomment these

  // {
  //   path: '404',
  //   component: NotFoundComponent,
  // },
  // {
  //   path: '**',
  //   redirectTo: '/404',
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
