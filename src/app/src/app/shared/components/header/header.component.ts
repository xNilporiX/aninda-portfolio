import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import data from '../../../en.json';
import { GIT_URL, LINKENDIN_URL } from 'src/app/data/url';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSidenavModule, MatCardModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  data = data;
  gitLink = GIT_URL;
  linkendIn = LINKENDIN_URL;

  constructor(){
  }
}
