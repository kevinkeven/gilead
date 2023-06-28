import { Component, Output } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EnquireService } from '../enquire.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-your-trip',
  templateUrl: './your-trip.component.html',
  styleUrls: ['./your-trip.component.css'],
})
export class YourTripComponent {
  maxDate: string;
  constructor(private enquireService: EnquireService, private router: Router) {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + 3);
    this.maxDate = currentDate.toISOString().split('T')[0];
  }
  today = new Date().toISOString().split('T')[0];

  @Output() yourTripdata!: any;
  TravelTypes = [
    { label: 'Luxury', value: 'Luxury' },
    { label: 'Midrange', value: 'Midrange' },
    { label: 'Budget', value: 'Budget' },
  ];

  country: any;

  yourTrip = new FormGroup({
    travel_destination: new FormControl('', Validators.required),

    travel_date: new FormControl(new Date(), Validators.required),
    travel_duration: new FormControl(2, Validators.required),
    travel_type: new FormControl(''.toUpperCase, Validators.required),
    adults: new FormControl(1, Validators.required),
    children: new FormControl(),
    special_request: new FormControl('', Validators.required),
  });
  ngOnInit() {
    this.enquireService.getCountry().subscribe({
      next: (data) => {
        this.country = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  get travelDestination() {
    return this.yourTrip.get('travelDestination');
  }
  get travel_date() {
    return this.yourTrip.get('travel_date');
  }
  get travel_duration() {
    return this.yourTrip.get('travel_duration');
  }
  get travel_type() {
    return this.yourTrip.get('travel_type');
  }
  get adults() {
    return this.yourTrip.get('adults');
  }
  get children() {
    return this.yourTrip.get('children');
  }
  get special_requests() {
    return this.yourTrip.get('special_requests');
  }

  YourTripForm() {
    this.enquireService.getYouTripdata(this.yourTrip.value);
    this.router.navigate(['/enquire/your-detail']);
  }
}
