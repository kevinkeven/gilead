import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { HeaderComponent } from '../shared/header/header.component';
import { DestinationModule } from '../destination/destination.module';
import { SharedModule } from '../shared/shared.module';
import { CountryComponent } from './country/country.component';
import { CarouselModule } from 'primeng/carousel';
import { ItinerariesModule } from '../itineraries/itineraries.module';

@NgModule({
  declarations: [HomeComponent, CountryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MegaMenuModule,
    DestinationModule,
    SharedModule,
    CarouselModule,
    ItinerariesModule,
  ],
})
export class HomeModule {}
