import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css'],
})
export class ThankYouComponent {
  constructor() {}

  ngOnInit() {
    console.log('Thank you for your enquiry');
  }
}
