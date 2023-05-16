import { Component, Input } from '@angular/core';
import { DestinationService } from '../destination.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css'],
})
export class DestinationDetailComponent {
  destinationSlug: any;
  destinationSingle: any;
  destinationSingleCountry: any;
  destinationHiglights: any;

  constructor(
    private destinationService: DestinationService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.destinationSlug = this.route.snapshot.paramMap.get('slug');
    this.getdestination();
  }

  getdestination() {
    this.destinationService.getDestination(this.destinationSlug).subscribe({
      next: (destination) => {
        this.destinationSingle = destination;
        this.getDestinationCountry(this.destinationSingle.id);
        this.titleService.setTitle(this.destinationSingle.name);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getDestinationCountry(id: any) {
    this.destinationService
      .getDestinationCountry(this.destinationSingle.country)
      .subscribe({
        next: (country) => {
          this.destinationSingleCountry = country;
          this.getDestinationHighlights();
        },
      });
  }
  getDestinationHighlights(id?: any) {
    this.destinationService
      .getHighLightsByDestination(this.destinationSingle.id)
      .subscribe({
        next: (highlights) => {
          this.destinationHiglights = highlights;
        },
      });
  }
}
