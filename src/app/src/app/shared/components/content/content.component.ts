import { Component } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ AboutMeComponent, WorkExperienceComponent, PostsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
