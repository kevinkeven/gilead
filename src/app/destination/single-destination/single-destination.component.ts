import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-destination',
  templateUrl: './single-destination.component.html',
  styleUrls: ['./single-destination.component.css'],
})
export class SingleDestinationComponent {
  @Input() destinationId: any;
  @Input() destinationImage: any;
  @Input() destinationName: any;
  @Input() destinationUrl: any;

  constructor() {}
}
