import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-movie-manager',
  templateUrl: './movie-manager.component.html',
  styleUrls: ['./movie-manager.component.css']
})
export class MovieManagerComponent implements OnInit {

  //  @Output() allows to create custom event that will emit data which could be consumed in html as $event
  //  E.g.: (movieAdded)="invokeMethod($event)"
  @Output('postMovieAdded') movieAdded = new EventEmitter<{title: string, rating: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddMovie(titleInputElement: HTMLInputElement, ratingInputElement: HTMLInputElement) {
    this.movieAdded.emit({
      title: titleInputElement.value,
      rating: parseInt(ratingInputElement.value)
    });
  }
}
