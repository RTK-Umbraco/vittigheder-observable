import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from 'src/app/interfaces/joke';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  _jokeService = new JokeService(); 

  joke$: Observable<Joke> | undefined;
  punchline$: Observable<Joke> | undefined;

  constructor(jokeService: JokeService) {
    this._jokeService = jokeService;
  }
      
  onClick(){
    let jokeId = this._jokeService.getJokeId();
    console.log(jokeId)
    this.joke$ = this._jokeService.emitJoke(jokeId);

    setTimeout(() => {
      this.punchline$ = this._jokeService.emitPunchLine(jokeId)
    }, 2000);
  }
}
