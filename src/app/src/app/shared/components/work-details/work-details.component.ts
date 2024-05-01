import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data/data.service';
import { WorkExperience } from 'src/app/types/types';

type expId = number;
@Component({
  selector: 'app-work-details',
  standalone: true,
  imports: [],
  templateUrl: './work-details.component.html',
  styleUrl: './work-details.component.scss',
})
export class WorkDetailsComponent {
  expId!: number;
  workDetails: any;

  constructor(
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) expId: expId
  ) {
    this.expId = expId;
    // this.dataService.dataContent.subscribe({
    //   next: (data: WorkExperience) =>{
    //     // this.workDetails = data.exp.find((exp:any) => exp.id);
    //     console.log(data.);
    //   }
    // })
  }
}
