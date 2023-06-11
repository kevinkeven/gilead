import { Component, Input } from '@angular/core';
import { DestinationService } from 'src/app/destination/destination.service';
import { SharedService } from 'src/app/shared/shared.service';
SharedService;

@Component({
  selector: 'app-itineraries-single',
  templateUrl: './itineraries-single.component.html',
  styleUrls: ['./itineraries-single.component.css'],
})
export class ItinerariesSingleComponent {
  constructor(private sharedService: SharedService) {}

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
    this.sharedService
      .getDestinationCountry(this.itineraryDestination)
      .subscribe({
        next: (destination) => {
          this.destination = destination;
        },
      });
  }
}
