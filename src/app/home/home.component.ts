import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { DestinationService } from '../destination/destination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private destinationService: DestinationService) {}
  items!: MegaMenuItem[];
  Destination: any;

  ngOnInit() {
    this.destination();
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
}
