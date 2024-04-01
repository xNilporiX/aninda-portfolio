import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  data: any;
  constructor(private dataService: DataService){
    this.dataService.dataContent.subscribe({
      next: data => { 
        this.data = data;
      }
    })
  }

}
