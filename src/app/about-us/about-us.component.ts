import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  readMore: boolean = false;
  ngOnInit() {}
  gilead_values = [
    {
      title: 'Our Mission',
      desc: 'To provide luxury tour and travel services in Uganda and Rwanda with exceptional customer service that exceeds expectations and creates unforgettable experiences.',
    },
    {
      title: 'Our Values',
      desc: 'Our visitors can see authentic African culture, wild wildlife, and a breathtaking environment on our safaris.',
    },
    {
      title: 'Our Vision',
      desc: 'Providing unique travel experince to all our clients from across the globe.',
    },
  ];
  values = [
    {
      title: 'Tailor-Made For You',
      desc: 'Every itinerary is designed from scratch based on your travel interests and needs',
    },
    {
      title: 'Best Price Guaranteed',
      desc: 'Our Best Price Guarantee means that you can be sure of booking at the best rate.Best Price Guaranteed',
    },
    {
      title: '24/7 Customer Service',
      desc: 'Our customer care team is on standby by 24/7 to assist you any time of the day.',
    },
  ];

  constructor(private sharedService: SharedService) {}

  ReadMore() {
    this.readMore = !this.readMore;
  }
}
