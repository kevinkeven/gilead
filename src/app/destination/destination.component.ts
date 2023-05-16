import { Component } from '@angular/core';
import { DestinationService } from './destination.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent {
  constructor(private destinationService: DestinationService) {}
  Destination: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.destie();
  }

  destie() {
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
