import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  // movieList = [{title: '3 Idiots', rating: 9}, {title: 'Indiana Jones', rating: 3}];
  movieList: { title: string, rating: number }[] = [
    {title: '3 Idiots', rating: 9},
    {title: 'Indiana Jones', rating: 3}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
