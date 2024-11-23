import { Component } from '@angular/core';
import { MethodWorkingCardComponent } from "../method-working-card/method-working-card.component";

@Component({
  selector: 'app-how-i-work',
  standalone: true,
  imports: [MethodWorkingCardComponent],
  templateUrl: './how-i-work.component.html',
  styleUrl: './how-i-work.component.scss'
})
export class HowIWorkComponent {

}
