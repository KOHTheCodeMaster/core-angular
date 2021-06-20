import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-movie-manager',
  templateUrl: './movie-manager.component.html',
  styleUrls: ['./movie-manager.component.css']
})
export class MovieManagerComponent implements OnInit {

  //  @Output() allows to create custom event that will emit data which could be consumed in html as $event
  //  E.g.: (movieAdded)="invokeMethod($event)"
  @Output() movieAdded = new EventEmitter<{title: string, rating: number}>();

  newMovieTitle: string;
  newMovieRating: number;

  constructor() { }

  ngOnInit(): void {
  }

  onAddMovie() {
    this.movieAdded.emit({
      title: this.newMovieTitle,
      rating: this.newMovieRating
    });
  }
}
