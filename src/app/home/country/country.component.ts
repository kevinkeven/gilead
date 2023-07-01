import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent {
  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private title: Title
  ) {}

  readMore: boolean = false;

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

  MonthMood = ['BEST', 'GOOD', 'MIXED'];

  ngOnInit(): void {
    this.countrySlug = this.route.snapshot.paramMap.get('slug');

    this.sharedService.getCountry(this.countrySlug).subscribe({
      next: (data) => {
        this.countryDetail = data;
        this.country = this.countryDetail.country;
        this.title.setTitle(this.country.name + '| Gilead Summit Holidays');
        this.famousof = this.countryDetail.countryfamousof;
        this.homeof = this.countryDetail.countryhomeFor;
        this.destinations = this.countryDetail.destinations.slice(0, 9);
        this.itineraries = this.countryDetail.itineraries.slice(0, 9);
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
  ReadMore() {
    this.readMore = !this.readMore;
  }
}
