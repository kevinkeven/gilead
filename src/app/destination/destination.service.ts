import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';


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

  getHighLightsByDestination(id: any) {
    return this.http.get(
      this.destinationApiUrl + `highlights/destination/${id}`
    );
  }
}
