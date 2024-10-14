import { Component } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { ExperienceCardComponent } from "../experience-card/experience-card.component";
import { ProfileComponent } from "../profile/profile.component";
import { DisplayExperienceComponent } from "../display-experience/display-experience.component";
import { DisplayProjectsComponent } from "../display-projects/display-projects.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [AboutMeComponent, WorkExperienceComponent, PostsComponent, ExperienceCardComponent, ProfileComponent, DisplayExperienceComponent, DisplayProjectsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
