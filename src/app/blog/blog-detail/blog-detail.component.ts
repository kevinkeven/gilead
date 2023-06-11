import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent {
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}
  post: any;
  ngOnInit() {
    this.blogService
      .getPostDetail(this.route.snapshot.paramMap.get('slug'))
      .subscribe({
        next: (value) => {
          this.post = value;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
