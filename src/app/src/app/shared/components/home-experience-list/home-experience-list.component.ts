import { Component } from '@angular/core';
import { ExperienceCardComponent } from "../experience-card/experience-card.component";

@Component({
  selector: 'app-home-experience-list',
  standalone: true,
  imports: [ExperienceCardComponent],
  templateUrl: './home-experience-list.component.html',
  styleUrl: './home-experience-list.component.scss'
})
export class HomeExperienceListComponent {

}
