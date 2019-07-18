import { Component, OnInit, Input } from '@angular/core';
import { Movie, MovieEmitter } from 'src/assets/interfaces/movie';
import { AppService } from '../app.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Input() moviesList: Movie[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {}

  selectMovie(movie: Movie, index: number) {
    const emitter: MovieEmitter = { movie, index };
    this.appService.selectMovie(emitter);
    // this.appService
  }
}
