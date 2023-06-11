import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}
  ngOnInit() {}
  APIURL = environment.APIURL;

  imagesApi = `${this.APIURL}shared/images/`;
  countryApiUrl = `${this.APIURL}shared/country/`;

  Countries() {
    return this.http.get(this.countryApiUrl);
  }

  getCountry(slug: any) {
    console.log(this.APIURL);
    return this.http.get(this.countryApiUrl + `${slug}/`);
  }
  getDestinationCountry(id: any) {
    return this.http.get(this.countryApiUrl + `dest/${id}/`);
  }
  getImages() {
    return this.http.get(this.imagesApi);
  }
}
