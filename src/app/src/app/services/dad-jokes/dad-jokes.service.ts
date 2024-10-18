import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDadJoke } from 'src/app/types/dad-jokes';

@Injectable({
  providedIn: 'root'
})
export class DadJokesService {
  private getDadJokesUrl = "https://icanhazdadjoke.com/slack";
  constructor(private http: HttpClient) { }

  /**
   * Calls the dad joke api and returns a random joke
   * @returns {Observable<IDadJoke>}
   */
  getDadjoke(): Observable<IDadJoke>{
    return this.http.get<IDadJoke>(this.getDadJokesUrl, {responseType: "json"});
  }
}
