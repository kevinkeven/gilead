import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { environment } from 'src/environments/environment';
environment


@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  APIURL!: string;
  destinationApiUrl = `${this.APIURL}destination/`;
  countryApiUrl = `${this.APIURL}shared/country/`;
  constructor(private http: HttpClient) {
    this.APIURL = environment.APIURL;
  }

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
