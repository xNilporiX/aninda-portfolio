import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data/data.service';
import { Experience, JobDetails } from 'src/app/types/types';

@Component({
  selector: 'app-work-details',
  standalone: true,
  imports: [MatDialogContent, MatDialogClose],
  templateUrl: './work-details.component.html',
  styleUrl: './work-details.component.scss',
})
export class WorkDetailsComponent {
  expId!: number;
  jobDetails!: JobDetails;

  constructor(
    @Inject(MAT_DIALOG_DATA) expId: any,
    private dataService: DataService
  ) {
    this.expId = expId.expId;
    this.dataService.dataContent.subscribe({
      next: (data) => {
        Object.keys(data.exp as Experience).map((key) => {
          if (!!data.exp[key].id && data.exp[key].id === this.expId) {
            this.jobDetails = data.exp[key];
            console.log(this.jobDetails);
          }
        });
      },
    });
  }
}
