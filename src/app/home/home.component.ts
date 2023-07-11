import { BlogService } from './../blog/blog.service';
import { ItinerariesService } from 'src/app/itineraries/itineraries.service';
import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { DestinationService } from '../destination/destination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private destinationService: DestinationService,
    private itinerariesservice: ItinerariesService,
    private blogService: BlogService
  ) {}
  items!: MegaMenuItem[];
  Destination: any;
  itinerariese: any;
  blogPosts: any;
  responsiveOptions: any;

  book_withus_images = [
    {
      image: '/assets/connect.svg',
      title: 'Get in touch',
      desc: 'contact us by phone or submit an online inquiry. Share your desired itinerary, and we will initiate the meticulous planning process for your extraordinary adventure.',
    },
    {
      image: '/assets/customize.svg',
      title: 'Adjust',
      desc: 'A specialized travel professional will reach out to you within 24 hours to commence crafting a personalized African itinerary tailored to your preferences and requirements.',
    },
    {
      image: '/assets/confirim.svg',
      title: 'Verify  ',
      desc: 'Our commitment to you is unwavering. We will persistently fine-tune your itinerary until we achieve the ideal journey at the most competitive value.',
    },
    {
      image: '/assets/Travel.svg',
      title: 'Enyoy the travel',
      desc: 'Obtain your travel documents for Gilead Summit Holidays, prepare your luggage, and embark on an extraordinary journey that will create lasting memories.',
    },
  ];

  ngOnInit() {
    this.destination();
    this.Itineraries();
    this.getposts();

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
  destination() {
    this.destinationService.getDestinations().subscribe({
      next: (destination: any) => {
        this.Destination = destination;
      },
    });
  }

  Itineraries() {
    this.itinerariesservice.getItineraries().subscribe({
      next: (itineraries) => {
        this.itinerariese = itineraries;
      },
    });
  }
  getposts() {
    this.blogService.getAllPosts().subscribe({
      next: (value) => {
        this.blogPosts = value;
      },
    });
  }
}
