import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css'],
})
export class BlogSingleComponent {
  @Input() slug!: string;
  @Input() image!: string;
  @Input() title!: string;
  @Input() desc!: string;
}
