import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  //  @Input('strAliasName') -> strAliasName is used as alias for this property
  //  After providing alias, Outside of this class for property binding
  //  this property will be referenced by alias name & not the property name itself
  //  E.g.:  [movieElement]="{}" is Valid   |   [movie]="{}" is Invalid since alias name is required
  @Input('movieElement') movie: { title: string, rating: number };

  constructor() { }

  ngOnInit(): void {
  }

}
