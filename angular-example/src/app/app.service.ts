import { Injectable, EventEmitter } from '@angular/core';
import { Movie, MovieEmitter } from 'src/assets/interfaces/movie';

@Injectable()
export class AppService {
  selectedMovie: EventEmitter<MovieEmitter> = new EventEmitter(true);

  constructor() {}

  selectMovie(emitter: MovieEmitter) {
    this.selectedMovie.emit(emitter);
  }

  deselectMovie() {
    this.selectedMovie.emit(null);
  }

  getSelectedMovie() {
    return this.selectedMovie;
  }
}
