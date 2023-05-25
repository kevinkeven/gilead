import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnquireService } from '../enquire.service';
import { Router } from '@angular/router';
import { MessageService, Message } from 'primeng/api';

@Component({
  selector: 'app-your-detail',
  templateUrl: './your-detail.component.html',
  styleUrls: ['./your-detail.component.css'],
})
export class YourDetailComponent {
  loading: boolean = false;
  constructor(private enquireService: EnquireService, private router: Router) {}

  PHONE_NUMBER_PATTERN =
    /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  yourDetail = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    first_name: new FormControl('', [Validators.required, Validators.min(4)]),
    last_name: new FormControl('', [Validators.required, Validators.min(4)]),
    phone_number: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.pattern(this.PHONE_NUMBER_PATTERN),
    ]),
    country: new FormControl('', Validators.required),
  });
  ngOnInit() {}

  get email() {
    return this.yourDetail.get('email');
  }
  get first_name() {
    return this.yourDetail.get('first_name');
  }
  get last_name() {
    return this.yourDetail.get('last_name');
  }
  get phone_number() {
    return this.yourDetail.get('phone_number');
  }
  get country() {
    return this.yourDetail.get('country');
  }

  YourDetailForm() {
    this.loading = true;
    this.enquireService.getEnquire(this.yourDetail.value).subscribe({
      next: (data) => {
        this.loading = false;
        this.router.navigate(['enquire/thank-you']);
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
      },
    });
  }
}
