import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-movie-manager',
  templateUrl: './movie-manager.component.html',
  styleUrls: ['./movie-manager.component.css']
})
export class MovieManagerComponent implements OnInit {

  //  @Output() allows to create custom event that will emit data which could be consumed in html as $event
  //  E.g.: (movieAdded)="invokeMethod($event)"
  @Output('postMovieAdded') movieAdded = new EventEmitter<{title: string, rating: number}>();

  //  Access local reference of HTML Template directly without invoking any method
  @ViewChild('titleInputElement', {static: true}) movieTitleInput: ElementRef;
  @ViewChild('ratingInputElement', {static: true}) movieRatingInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddMovie() {
    this.movieAdded.emit({
      title: this.movieTitleInput.nativeElement.value,
      rating: parseInt(this.movieRatingInput.nativeElement.value)
    });
  }
}
