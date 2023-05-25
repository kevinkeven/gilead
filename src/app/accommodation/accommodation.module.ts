import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccommodationRoutingModule } from './accommodation-routing.module';
import { AccommodationComponent } from './accommodation.component';
import { AccommodationSingleComponent } from './accommodation-single/accommodation-single.component';
import { AccommodationDetailComponent } from './accommodation-detail/accommodation-detail.component';
import { AccommodationListComponent } from './accommodation-list/accommodation-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FieldsetModule } from 'primeng/fieldset';
import { GalleriaModule } from 'primeng/galleria';
import { ItinerariesModule } from '../itineraries/itineraries.module';

@NgModule({
  declarations: [
    AccommodationComponent,
    AccommodationSingleComponent,
    AccommodationDetailComponent,
    AccommodationListComponent,
  ],
  imports: [
    CommonModule,
    AccommodationRoutingModule,
    HttpClientModule,
    SharedModule,
    FieldsetModule,
    GalleriaModule,
    ItinerariesModule,
  ],
  exports: [AccommodationSingleComponent],
})
export class AccommodationModule {}
