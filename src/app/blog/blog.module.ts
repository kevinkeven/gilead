import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { SharedModule } from '../shared/shared.module';
SharedModule;

@NgModule({
  declarations: [BlogComponent, BlogSingleComponent, BlogDetailComponent],
  imports: [CommonModule, BlogRoutingModule, HttpClientModule, SharedModule],
  exports: [BlogSingleComponent],
})
export class BlogModule {}
