import { SharedService } from './../../shared/shared.service';
import { Component } from '@angular/core';
import { ItinerariesService } from '../itineraries.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-itineraries-list',
  templateUrl: './itineraries-list.component.html',
  styleUrls: ['./itineraries-list.component.css'],
})
export class ItinerariesListComponent {
  first: number = 0;

  rows: number = 10;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  Itineraries: any;
  filteredItineraries: any;
  Countries: any;

  filterForm = new FormGroup({
    country: new FormControl(),
  });

  constructor(
    private itinerariesService: ItinerariesService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.itinerariesService.getItineraries().subscribe({
      next: (result) => {
        this.Itineraries = result;
        this.filteredItineraries = this.Itineraries;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.sharedService.Countries().subscribe({
      next: (result) => {
        this.Countries = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

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

  filterByCountry() {
    if (Number(this.filterForm.controls.country.value) != 0) {
      this.filteredItineraries = this.Itineraries.filter(
        (item: any) =>
          item.country === Number(this.filterForm.controls.country.value)
      );
    } else {
      this.filteredItineraries = this.Itineraries;
    }
  }
}
