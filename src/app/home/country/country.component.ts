import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationService } from 'src/app/destination/destination.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent {
  constructor(
    private destinationService: DestinationService,
    private route: ActivatedRoute
  ) {}

  country: any;
  countryDetail: any;
  countrySlug: any;
  famousof: any;
  homeof: any;
  destinations: any;
  itineraries: any;
  gallery: any;
  responsiveOptions: any;
  countryMonth: any;

  MonthMood = ['GOOD', 'BEST', 'MIXED'];

  ngOnInit(): void {
    this.countrySlug = this.route.snapshot.paramMap.get('slug');

    this.destinationService.getCountry(this.countrySlug).subscribe({
      next: (data) => {
        this.countryDetail = data;
        this.country = this.countryDetail.country;
        this.famousof = this.countryDetail.countryfamousof;
        this.homeof = this.countryDetail.countryhomeFor;
        this.destinations = this.countryDetail.destinations;
        this.itineraries = this.countryDetail.itineraries;
        this.gallery = this.countryDetail.galleryImages;
        this.countryMonth = this.countryDetail.countryMonth;
      },
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
