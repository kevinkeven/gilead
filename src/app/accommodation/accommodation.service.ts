import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccommodationService {
  APIURL = 'http://127.0.0.1:8000/api/';
  AccommodationUrl = `${this.APIURL}accommodation/`;
  constructor(private http: HttpClient) {}

  getAccommodatin(slug: string) {
    return this.http.get(this.AccommodationUrl + `detail/${slug}/`);
  }
}
