import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
})
export class WorkExperienceComponent {
  data: any[] = [];
  isExpanded = false;
  constructor(private dataService: DataService) {
    this.dataService.dataContent.subscribe({
      next: (data: any) => {
        this.data = Object.keys(data.exp)
          .map((key) => ({
            id: data.exp[key].id,
            heading: data.exp[key].heading,
            summary: data.exp[key].summary,
          }))
          .filter((data) => !!data.id);
      },
    });
  }

  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }
}
