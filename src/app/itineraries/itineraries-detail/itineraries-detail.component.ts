import { Component } from '@angular/core';
import { ItinerariesService } from './../itineraries.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-itineraries-detail',
  templateUrl: './itineraries-detail.component.html',
  styleUrls: ['./itineraries-detail.component.css'],
})
export class ItinerariesDetailComponent {
  constructor(
    private itinerariesiervice: ItinerariesService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}
  itinerarySlug: any;
  itinerary: any;
  ititineraryDetail: any;
  itinerarymonth: any;
  itineraryactivity: any;
  included: any;
  excluded: any;
  dayByDay: any;
  MonthMood = ['BEST', 'GOOD', 'MIXED'];

  ngOnInit() {
    this.itinerarySlug = this.route.snapshot.paramMap.get('slug');
    this.fetchItineraries(this.itinerarySlug);
  }

  fetchItineraries(slug: string) {
    this.itinerariesiervice.getItinerariesDetail(slug).subscribe({
      next: (itinerary) => {
        this.ititineraryDetail = itinerary;
        this.itinerary = this.ititineraryDetail.itinerary;
        this.titleService.setTitle(this.itinerary.name);
        this.itinerarymonth = this.ititineraryDetail.itinerarymonth;
        this.itineraryactivity = this.ititineraryDetail.itineraryactivity;
        this.included = this.ititineraryDetail.included;
        this.excluded = this.ititineraryDetail.excluded;
        this.dayByDay = this.ititineraryDetail.daybyday;
        console.log(this.itinerary);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
