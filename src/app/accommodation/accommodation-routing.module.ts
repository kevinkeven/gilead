import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationComponent } from './accommodation.component';
import { AccommodationDetailComponent } from './accommodation-detail/accommodation-detail.component';

const routes: Routes = [
  { path: '', component: AccommodationComponent },
  { path: 'accommodation/:slug', component: AccommodationDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccommodationRoutingModule {}
