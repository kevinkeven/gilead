import { Component } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  BlogList: any;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getAllPosts().subscribe({
      next: (result) => {
        this.BlogList = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
