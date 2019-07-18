import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Movie, MovieEmitter } from 'src/assets/interfaces/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-example';

  movieList: Movie[] = [
    {
      title: 'Terminator'
    },
    {
      title: 'Back to the future'
    },
    {
      title: 'Toy Story'
    }
  ];

  selectedMovie: Movie;
  selectedMovieIndex: number;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getSelectedMovie().subscribe((data: MovieEmitter) => {
      this.selectedMovie = data.movie;
      this.selectedMovieIndex = data.index;
    });
  }

  deleteMovie(index: number) {
    this.movieList.splice(index, 1);
    this.selectedMovie = undefined;
    this.selectedMovieIndex = undefined;
  }

  addMovie() {
    this.movieList.push(new Movie(''));
    this.selectedMovie = this.movieList[this.movieList.length - 1];
  }
}
