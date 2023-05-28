import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ItinerariesService {
  APIURL = environment.APIURL;
  itinerariesApiUrl = `${this.APIURL}itineraries/`;
  constructor(private http: HttpClient) {
    this.APIURL = environment.APIURL;
  }

  getItineraries() {
    return this.http.get(this.itinerariesApiUrl + 'list/');
  }

  getItinerariesDetail(slug: any) {
    return this.http.get(this.itinerariesApiUrl + `detail/${slug}`);
  }
}
