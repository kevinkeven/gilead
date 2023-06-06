import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './destination.component';

import { HttpClientModule } from '@angular/common/http';
import { SingleDestinationComponent } from './single-destination/single-destination.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { SharedModule } from '../shared/shared.module';
import { AccommodationModule } from '../accommodation/accommodation.module';
import { CarouselModule } from 'primeng/carousel';
import { ItinerariesModule } from '../itineraries/itineraries.module';



@NgModule({
  declarations: [
    DestinationComponent,
    SingleDestinationComponent,
    DestinationDetailComponent,
    DestinationListComponent,
  ],
  imports: [
    CommonModule,
    DestinationRoutingModule,
    HttpClientModule,
    SharedModule,
    CarouselModule,
    ItinerariesModule,
    AccommodationModule,
  ],
  exports: [DestinationComponent, SingleDestinationComponent],
})
export class DestinationModule {}
