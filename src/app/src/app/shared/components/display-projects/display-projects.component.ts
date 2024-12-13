import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-display-projects',
  standalone: true,
  imports: [ProjectCardComponent, RouterLink],
  templateUrl: './display-projects.component.html',
  styleUrl: './display-projects.component.scss',
})
export class DisplayProjectsComponent {
  constructor(private router: Router) {}

  navToProjects() {
    this.router.navigate(['projects']);
  }
}
