import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './destination.component';

import { HttpClientModule } from '@angular/common/http';
import { SingleDestinationComponent } from './single-destination/single-destination.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { SharedModule } from '../shared/shared.module';

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
  ],
  exports: [DestinationComponent, SingleDestinationComponent],
})
export class DestinationModule {}
