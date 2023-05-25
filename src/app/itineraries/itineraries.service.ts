import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItinerariesService {
  APIURL = 'http://127.0.0.1:8000/api/';
  itinerariesApiUrl = `${this.APIURL}itineraries/`;
  constructor(private http: HttpClient) {}

  getItineraries() {
    return this.http.get(this.itinerariesApiUrl + 'list/');
  }

  getItinerariesDetail(slug: any) {
    return this.http.get(this.itinerariesApiUrl + `detail/${slug}`);
  }
}
