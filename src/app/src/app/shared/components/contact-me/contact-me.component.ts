import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  contactData: any;
  constructor(private dataService: DataService){
    this.dataService.dataContent.subscribe({
      next: (data: any) => this.contactData = data,
      error: (error ) => console.error('failed to get contact data', error)
    })
  }
}
