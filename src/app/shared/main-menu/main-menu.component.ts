import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { DestinationService } from 'src/app/destination/destination.service';
DestinationService

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  ToggleMegamenu = false;
  countries: any;
  destinations: any;

  constructor(private sharedService: SharedService, private destinationService: DestinationService) { }

  ngOnInit() {
    this.sharedService.Countries().subscribe({
      next: (data) => {
        this.countries = data;
      },
      error: (error) => {
        console.log(error);
      },
    });this.destinationService.getDestinations().subscribe({
      next: (data) => {
        this.destinations = data;
      }
    })
  }

}
