import { Component, Input } from '@angular/core';
import { DestinationService } from '../destination.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css'],
})
export class DestinationDetailComponent {
  destinationSlug: any;
  destinationSingle: any;
  destinationSingleCountry: any;
  destination: any;
  animals: any;
  months: any;
  highlights: any;
  location: any;
  accommodations: any;
  transport: any;
  itineraries: any;

  MonthMood = ['GOOD', 'BEST', 'MIXED'];

  responsiveOptions = [
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

  constructor(
    private destinationService: DestinationService,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.destinationSlug = this.route.snapshot.paramMap.get('slug');
    this.getdestination();
  }

  getdestination() {
    this.destinationService.getDestination(this.destinationSlug).subscribe({
      next: (destination) => {
        this.destination = destination;
        this.destinationSingle = this.destination.destination;
        this.animals = this.destination.animals;
        this.months = this.destination.destinationmonth;
        console.log(destination);
        this.highlights = this.destination.highlights;
        this.location = this.destination.location;
        this.transport = this.destination.transport;
        this.accommodations = this.destination.accommodations;
        this.itineraries = this.destination.itiniraries;
        this.getDestinationCountry(this.destinationSingle.country);
        this.titleService.setTitle(this.destinationSingle.name);
      },
      error: (err) => {
        if (err.status == 0) {
          this.router.navigate(['/not-found']);
        }
      },
    });
  }
  getDestinationCountry(id: any) {
    this.sharedService.getDestinationCountry(id).subscribe({
      next: (country) => {
        this.destinationSingleCountry = country;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
