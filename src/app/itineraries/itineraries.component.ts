import { Component } from '@angular/core';

@Component({
  selector: 'app-itineraries',
  templateUrl: './itineraries.component.html',
  styleUrls: ['./itineraries.component.css'],
})
export class ItinerariesComponent {
  ToggleMegamenu = false;
  items = [
    {
      label: 'Videos',
      icon: 'pi pi-fw pi-video',
      items: [
        [
          {
            label: 'Video 1',
            items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }],
          },
          {
            label: 'Video 2',
            items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }],
          },
        ],
        [
          {
            label: 'Video 3',
            items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }],
          },
          {
            label: 'Video 4',
            items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }],
          },
        ],
      ],
    },
  ];

  showMegaMenu() {
    this.ToggleMegamenu = !true;
  }
}
