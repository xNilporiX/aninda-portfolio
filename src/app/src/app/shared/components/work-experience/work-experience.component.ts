import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { WorkDetailsComponent } from '../work-details/work-details.component';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
})
export class WorkExperienceComponent {
  cardData: any[] = [];
  data: any;
  isExpanded = false;
  constructor(private dataService: DataService,
              private dialog: MatDialog) {
    this.dataService.dataContent.subscribe({
      next: (data: any) => {
        this.data = data;
        this.cardData = Object.keys(data.exp)
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

  openExpDetails(expId: number) {
    this.dialog.open(WorkDetailsComponent, {
      data: {
        expId: expId
      }
    })
  }
}
