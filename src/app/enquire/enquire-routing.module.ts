import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquireComponent } from './enquire.component';
import { YourTripComponent } from './your-trip/your-trip.component';
import { YourDetailComponent } from './your-detail/your-detail.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const enquireroutes: Routes = [
  {
    path: '',
    component: EnquireComponent,
    title: 'Enquire',
    children: [
      { path: '', redirectTo: 'your-trip', pathMatch: 'full' },

      { path: 'your-trip', component: YourTripComponent, title: 'Your Trip' },
      {
        path: 'your-detail',
        component: YourDetailComponent,
        title: 'Your Detail',
      },
      { path: 'thank-you', component: ThankYouComponent, title: 'Thank You' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(enquireroutes)],
  exports: [RouterModule],
})
export class EnquireRoutingModule {}
