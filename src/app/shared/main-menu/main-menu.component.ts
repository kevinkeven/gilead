import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { DestinationService } from 'src/app/destination/destination.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent {
  ToggleMegamenu = false;
  countries: any;
  destinations: any;

  constructor(
    private sharedService: SharedService,
    private destinationService: DestinationService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.sharedService.Countries().subscribe({
      next: (data) => {
        this.countries = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.destinationService.getDestinations().subscribe({
      next: (data) => {
        this.destinations = data;
      },
    });
  }
  todestination(slug: any) {
    this.router
      .navigate(['/destination', slug], { skipLocationChange: true })
      .then(() => {
        this.location.replaceState(`/destination/${slug}`);
        window.location.reload();
      });
  }
  toCountry(slug: any) {
    this.router.navigate(['/', slug], { skipLocationChange: true }).then(() => {
      this.location.replaceState(`/${slug}`);
      window.location.reload();
    });
  }
}
