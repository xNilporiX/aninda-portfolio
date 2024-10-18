import { Component } from '@angular/core';
import { DadJokesComponent } from "../dad-jokes/dad-jokes.component";
import { SocialsComponent } from "../socials/socials.component";
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [DadJokesComponent, SocialsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {

}
