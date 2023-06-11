import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccommodationService {
  APIURL = environment.APIURL;
  AccommodationUrl = `${this.APIURL}accommodation/`;
  constructor(private http: HttpClient) {
    this.APIURL = environment.APIURL;
  }

  getAccommodatin(slug: string) {
    return this.http.get(this.AccommodationUrl + `detail/${slug}/`);
  }
}
