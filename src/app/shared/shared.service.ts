import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  APIURL = 'http://127.0.0.1:8000/api/';
  countryApiUrl = `${this.APIURL}shared/country/`;

  Countries() {
    return this.http.get(this.countryApiUrl);
  }

  getCountry(slug: any) {
    return this.http.get(this.countryApiUrl + `${slug}/`);
  }
  getDestinationCountry(id: any) {
    return this.http.get(this.countryApiUrl + `dest/${id}/`);
  }
}
