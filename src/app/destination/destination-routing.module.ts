import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';
import { DestinationListComponent } from './destination-list/destination-list.component';

const routes: Routes = [
  { path: 'destination/:slug', component: DestinationDetailComponent },
  {
    path: 'destinations',
    component: DestinationListComponent,
    title: 'Destinations',
  },
  { path: '', component: DestinationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationRoutingModule {}
