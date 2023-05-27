import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnquireService {
  APIURL!: string
  constructor(private http: HttpClient) {
    this.APIURL = environment.APIURL;
    // console.log(this.APIURL);
  }
  EnquireAPi = `${this.APIURL}enquire/`;
  countryApiUrl = `${this.APIURL}shared/country/`;
  youTripData: any;
  yourDetailData: any;

  getYouTripdata(data: any) {
    this.youTripData = data;
  }

  getCountry() {
    return this.http.get(this.countryApiUrl);
  }

  getEnquire(form: any) {
    // return this.http.post(this.APIURL, {
    //   you_trip: this.youTripData,
    //   your_detail: this.yourDetailData,
    // });
    const data = {
      ...this.youTripData,
      ...form,
    };

    return this.http.post(this.EnquireAPi + 'create/', data);
  }
}
