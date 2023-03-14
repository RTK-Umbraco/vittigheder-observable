import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Subject } from 'rxjs/internal/Subject';
import { Joke } from '../interfaces/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private jokes: Array<Joke>;
  private jokeSubject$: Subject<Joke[]> = new BehaviorSubject<Joke[]>([]);
  jokes$: Observable<Joke[]> = this.jokeSubject$.asObservable();

  constructor() {
    this.jokes = [
      // {joke: "Jeg overvejer at gifte mig med en tysker", jokePunchline: "Men er det over grænsen?"},
      // {joke: "Hvorfor var ronaldo's søn ikke i skole", jokePunchline: "Fordi han var SUUUUUUI"},
      // {joke: "Hvad er ligheden mellem en fugl og et brød?", jokePunchline: "De kan begge to fugle undtaget brødet"},

      {id: 1, joke: "joke1", jokePunchline: "jokePunchline1"},
      {id: 2, joke: "joke2", jokePunchline: "jokePunchline2"},
      {id: 3, joke: "joke3", jokePunchline: "jokePunchline3"},
    ];

    this.jokeSubject$.next(this.jokes);
   }


   getJokeId(): number {
    return Math.floor(Math.random() * this.jokes.length)
 }
   emitJoke(index: number): Observable<Joke> {
      return of(this.jokes[index]);
   }

   emitPunchLine(index: number): Observable<Joke> {
    return of(this.jokes[index]);
 }
}
