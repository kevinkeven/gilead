import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AccommodationService } from '../accommodation.service';
import { ItinerariesService } from 'src/app/itineraries/itineraries.service';

@Component({
  selector: 'app-accommodation-detail',
  templateUrl: './accommodation-detail.component.html',
  styleUrls: ['./accommodation-detail.component.css'],
})
export class AccommodationDetailComponent {
  readMore: boolean = false;
  accommmodationSlug: any;
  accommodationDetail: any;
  accommodationexpertview: any;
  accommodationglance: any;
  accommodationtips: any;
  accommodationimages!: any[];
  itineraries: any;

  accommodation: any;

  displayBasic!: boolean;

  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(
    private titleSerice: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private accommodationService: AccommodationService,
    private itinerariesService: ItinerariesService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.accommmodationSlug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.fetchAccommodations(this.accommmodationSlug);
  }

  fetchAccommodations(slug: string) {
    this.accommodationService.getAccommodatin(slug).subscribe({
      next: (result) => {
        this.accommodation = result;
        this.accommodationDetail = this.accommodation.accommodation;
        this.titleSerice.setTitle(this.accommodationDetail.name);
        this.accommodationexpertview = this.accommodation.expertview;
        this.accommodationglance = this.accommodation.glance;
        this.accommodationtips = this.accommodation.insidertip;
        this.accommodationimages = this.accommodation.galleryImages;
        this.getItineraries();
      },
    });
  }

  getItineraries() {
    this.itinerariesService.getItineraries().subscribe({
      next: (data) => {
        this.itineraries = data;
        console.log(data);
      },
    });
  }
  ReadMore() {
    this.readMore = !this.readMore;
  }
}
