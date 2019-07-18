import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  EventEmitter,
  Output
} from '@angular/core';
import { Movie, MovieChanges } from 'src/assets/interfaces/movie';
import { AppService } from '../app.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnChanges {
  @Input() selectedMovie: Movie;
  @Output() deleteMovie: EventEmitter<void> = new EventEmitter();

  movieTitle = '';
  movieDescription = '';

  constructor(private appService: AppService) {}

  ngOnChanges(simpleChanges: MovieChanges) {
    this.movieTitle = simpleChanges.selectedMovie.currentValue.title;
  }

  ngOnInit() {}

  saveMovieData() {
    this.selectedMovie.title = this.movieTitle;
  }

  deleteMovieEmit() {
    this.deleteMovie.emit();
  }
}
