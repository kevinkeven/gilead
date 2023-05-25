import { Component, Input } from '@angular/core';
import { DestinationService } from 'src/app/destination/destination.service';

@Component({
  selector: 'app-itineraries-single',
  templateUrl: './itineraries-single.component.html',
  styleUrls: ['./itineraries-single.component.css'],
})
export class ItinerariesSingleComponent {
  constructor(private destinationService: DestinationService) {}

  @Input() itinerarySlug: any;
  @Input() itineraryTitle: any;
  @Input() itineraryDescription: any;
  @Input() itineraryImage: any;
  @Input() itineraryPrice: any;
  @Input() itineraryDuration: any;
  @Input() itineraryDestination: any;
  @Input() itineraryDepartureFrom: any;

  destination: any;

  ngOnInit(): void {
    this.destinationService
      .getDestinationCountry(this.itineraryDestination)
      .subscribe({
        next: (destination) => {
          this.destination = destination;
          console.log(this.destination);
        },
      });
  }
}
