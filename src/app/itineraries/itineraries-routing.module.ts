import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItinerariesComponent } from './itineraries.component';
import { ItinerariesDetailComponent } from './itineraries-detail/itineraries-detail.component';
import { ItinerariesListComponent } from './itineraries-list/itineraries-list.component';

const routes: Routes = [
  { path: 'detail/:slug', component: ItinerariesDetailComponent },
  { path: '', component: ItinerariesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerariesRoutingModule {}
