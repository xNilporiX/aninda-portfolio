import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { GIT_URL, LINKENDIN_URL } from 'src/app/data/url';
import { RouterLink } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSidenavModule, MatCardModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  data: any;
  gitLink = GIT_URL;
  linkendIn = LINKENDIN_URL;

  constructor(private dataService: DataService) {
    this.dataService.dataContent.subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (error) => {
        console.error('error getting data', error);
      },
    });
  }
}
