import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accommodation-single',
  templateUrl: './accommodation-single.component.html',
  styleUrls: ['./accommodation-single.component.css'],
})
export class AccommodationSingleComponent {
  @Input() accommodationId: any;
  @Input() accommodationImage: any;
  @Input() accommodationName: any;
  @Input() accommodationUrl: any;
}
