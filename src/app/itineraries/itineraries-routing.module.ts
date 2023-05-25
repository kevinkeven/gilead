import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItinerariesComponent } from './itineraries.component';
import { ItinerariesDetailComponent } from './itineraries-detail/itineraries-detail.component';

const routes: Routes = [
  {
    path: '',

    children: [
      { path: '', component: ItinerariesComponent },
      { path: 'detail/:slug', component: ItinerariesDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerariesRoutingModule {}
