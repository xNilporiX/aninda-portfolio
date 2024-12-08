import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { DisplayProjectsComponent } from '../display-projects/display-projects.component';
import { HowIWorkComponent } from '../how-i-work/how-i-work.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    ProfileComponent,
    DisplayProjectsComponent,
    HowIWorkComponent,
    ContactMeComponent,
    NavBarComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {}
