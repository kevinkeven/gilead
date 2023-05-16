import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'destination',
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
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page Not Found | Gilead Summit Holidays',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
