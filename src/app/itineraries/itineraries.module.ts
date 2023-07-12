import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItinerariesRoutingModule } from './itineraries-routing.module';
import { ItinerariesComponent } from './itineraries.component';
import { ItinerariesSingleComponent } from './itineraries-single/itineraries-single.component';
import { ItinerariesDetailComponent } from './itineraries-detail/itineraries-detail.component';
import { ItinerariesListComponent } from './itineraries-list/itineraries-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'primeng/carousel';
import { TimelineModule } from 'primeng/timeline';
import { MegaMenuModule } from 'primeng/megamenu';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItinerariesComponent,
    ItinerariesSingleComponent,
    ItinerariesDetailComponent,
    ItinerariesListComponent,
  ],
  imports: [
    CommonModule,
    ItinerariesRoutingModule,
    HttpClientModule,
    SharedModule,
    CarouselModule,
    TimelineModule,
    MegaMenuModule,
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ItinerariesSingleComponent],
})
export class ItinerariesModule {}
