import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-enquire',
  templateUrl: './enquire.component.html',
  styleUrls: ['./enquire.component.css'],
})
export class EnquireComponent {
  visible!: boolean;

  items!: MenuItem[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.items = [
      {
        label: 'Your Trip',
        routerLink: 'your-trip',
      },
      {
        label: 'your Detail',
        routerLink: 'your-detail',
      },
      {
        label: 'Thank You',
        routerLink: 'thank-you',
      },
    ];
  }
  showDialog() {
    this.visible = true;
  }
}
