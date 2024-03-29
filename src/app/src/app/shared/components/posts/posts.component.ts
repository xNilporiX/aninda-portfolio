import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { IPost } from 'src/app/types/types';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  data: any;
  posts: IPost[] = [];
  constructor(private dataService: DataService) {
    this.dataService.dataContent.subscribe({
      next: (data: any) => (this.data = data),
    });
  }
}
