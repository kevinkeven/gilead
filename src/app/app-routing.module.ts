import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'destinations',
    loadChildren: () =>
      import('./destination/destination.module').then(
        (m) => m.DestinationModule
      ),
  },
  {
    path: 'accommodation',
    loadChildren: () =>
      import('./accommodation/accommodation.module').then(
        (m) => m.AccommodationModule
      ),
  },
  {
    path: 'itineraries',
    loadChildren: () =>
      import('./itineraries/itineraries.module').then(
        (m) => m.ItinerariesModule
      ),
  },
  {
    path: 'enquire',
    loadChildren: () =>
      import('./enquire/enquire.module').then((m) => m.EnquireModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: 'About Us | Gilead Summit Holidays',
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page Not Found | Gilead Summit Holidays',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
