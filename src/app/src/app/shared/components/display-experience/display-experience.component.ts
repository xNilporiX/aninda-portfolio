import { Component } from '@angular/core';
import { ExperienceCardComponent } from "../experience-card/experience-card.component";

@Component({
  selector: 'app-display-experience',
  standalone: true,
  imports: [ExperienceCardComponent],
  templateUrl: './display-experience.component.html',
  styleUrl: './display-experience.component.scss'
})
export class DisplayExperienceComponent {

}
