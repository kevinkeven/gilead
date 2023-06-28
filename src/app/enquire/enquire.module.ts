import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquireRoutingModule } from './enquire-routing.module';
import { EnquireComponent } from './enquire.component';
import { DialogModule } from 'primeng/dialog';
import { StepsModule } from 'primeng/steps';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { YourTripComponent } from './your-trip/your-trip.component';
import { YourDetailComponent } from './your-detail/your-detail.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { CheckboxModule } from 'primeng/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    EnquireComponent,
    YourTripComponent,
    YourDetailComponent,
    ThankYouComponent,
  ],
  imports: [
    CommonModule,
    EnquireRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    StepsModule,
    CalendarModule,
    HttpClientModule,
    CheckboxModule,
    DropdownModule,
  ],
})
export class EnquireModule {}
