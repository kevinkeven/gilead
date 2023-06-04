import { ItinerariesService } from 'src/app/itineraries/itineraries.service';
import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { DestinationService } from '../destination/destination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private destinationService: DestinationService,
    private itinerariesservice: ItinerariesService
  ) {}
  items!: MegaMenuItem[];
  Destination: any;
  itinerariese: any;
  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  ngOnInit() {
    this.destination();
    this.Itineraries();
  }
  destination() {
    this.destinationService.getDestinations().subscribe({
      next: (destination: any) => {
        this.Destination = destination.slice(0,5);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  Itineraries() {
    this.itinerariesservice.getItineraries().subscribe({
      next: (itineraries) => {
        this.itinerariese = itineraries;
        console.log(this.itinerariese);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
