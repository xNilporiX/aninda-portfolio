import { Component } from '@angular/core';
import { DadJokesService } from 'src/app/services/dad-jokes/dad-jokes.service';
import { IDadJoke } from 'src/app/types/dad-jokes';

@Component({
  selector: 'app-dad-jokes',
  standalone: true,
  imports: [],
  templateUrl: './dad-jokes.component.html',
  styleUrl: './dad-jokes.component.scss'
})
export class DadJokesComponent {
  dadJoke: IDadJoke | undefined;
  showButton = true;
  constructor(private dadJokesService: DadJokesService) {}

  /**
   * Gets the Dad Joke
   * @returns {void}
   */
  getJoke() : void {
    this.dadJokesService.getDadjoke().subscribe({
      next: (data: IDadJoke) => {
        this.showButton = false;
        this.dadJoke = undefined;
        setTimeout(()=>{
          this.dadJoke = data;
        }, 1000);
      },
      error: (error) => {
        console.error('Failed to get dad joke', error);
      },
    });
  }
}
