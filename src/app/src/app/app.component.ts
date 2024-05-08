import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { ContentComponent } from './shared/components/content/content.component';
import { DataService } from './services/data/data.service';
import { WorkExperienceComponent } from './shared/components/work-experience/work-experience.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { ContactMeComponent } from './shared/components/contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WorkExperienceComponent, PostsComponent, ContactMeComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private dataService: DataService){
    this.dataService.getData();
  }


}
