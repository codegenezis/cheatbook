import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryListComponent } from './entry-list/entry-list.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    EntryListComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EntryListComponent,
      },
      {path: ':id', component: PostComponent, pathMatch: 'full'}
    ]),
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient})
  ]
})
export class BlogModule { }
