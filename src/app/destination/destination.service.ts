import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  APIURL = 'http://127.0.0.1:8000/api/';
  destinationApiUrl = `${this.APIURL}destination/`;
  countryApiUrl = `${this.APIURL}shared/country/`;
  constructor(private http: HttpClient) {}

  getDestinations() {
    return this.http.get(this.destinationApiUrl + 'list/');
  }
  getDestination(slug: any) {
    return this.http.get(this.destinationApiUrl + 'detail/' + slug);
  }
  getDestinationCountry(id: any) {
    return this.http.get(this.countryApiUrl + `dest/${id}/`);
  }
  getCountry(slug: any) {
    return this.http.get(this.countryApiUrl + `${slug}/`);
  }
  getHighLightsByDestination(id: any) {
    return this.http.get(
      this.destinationApiUrl + `highlights/destination/${id}`
    );
  }
}
