import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  constructor(private http: HttpClient) {}
  APIURL = environment.APIURL;

  contactUsUrl = `${this.APIURL}/enquire/contact-us/create`;
  contactUs(data: any) {
    return this.http.post(this.contactUsUrl, data);
  }
}
