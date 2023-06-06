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

  ngOnInit() {
    this.destination();
    this.Itineraries();
    this.getposts();
  }
  destination() {
    this.destinationService.getDestinations().subscribe({
      next: (destination: any) => {
        this.Destination = destination.slice(0, 5);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  Itineraries() {
    this.itinerariesservice.getItineraries().subscribe({
      next: (itineraries) => {
        this.itinerariese = itineraries;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getposts() {
    this.blogService.getAllPosts().subscribe({
      next: (value) => {
        this.blogPosts = value;
        console.log(value);
      },
    });
  }
}
