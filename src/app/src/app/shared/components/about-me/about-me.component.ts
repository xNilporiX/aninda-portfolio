import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  data: any;
  constructor(private dataService: DataService) {
    this.dataService.dataContent.subscribe({
      next: (data) => {
        this.data = data;
      },
    });
  }
}
