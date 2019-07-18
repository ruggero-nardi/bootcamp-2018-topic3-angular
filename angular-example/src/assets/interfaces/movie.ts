import { SimpleChanges, SimpleChange } from '@angular/core';

export class Movie {
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

export interface MovieEmitter {
  movie: Movie;
  index: number;
}

export interface MovieChanges extends SimpleChanges {
  selectedMovie: MovieChange;
}

export interface MovieChange extends SimpleChange {
  currentValue: Movie;
}
