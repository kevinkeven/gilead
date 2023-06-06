import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  APIURL = environment.APIURL;
  blogurl = `${this.APIURL}blog/`;

  getAllPosts() {
    return this.http.get(`${this.blogurl}list/`);
  }
}
