import { ItinerariesService } from 'src/app/itineraries/itineraries.service';
import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { DestinationService } from '../destination/destination.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private destinationService: DestinationService,
    private itinerariesservice: ItinerariesService
  ) {
    console.log(environment.APIURL);
  }
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
      next: (destination) => {
        this.Destination = destination;
        console.log(destination);
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
