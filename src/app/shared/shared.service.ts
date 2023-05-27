import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class SharedService {
  APIURL!: string
  constructor(private http: HttpClient) {
    this.APIURL = environment.APIURL;
  }


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
