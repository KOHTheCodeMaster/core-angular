import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding-dive',
  templateUrl: './data-binding-dive.component.html',
  styleUrls: ['./data-binding-dive.component.css']
})
export class DataBindingDiveComponent implements OnInit {

  // movieList = [{title: '3 Idiots', rating: 9}, {title: 'Indiana Jones', rating: 3}];
  movieList: { title: string, rating: number }[] = [
    {title: '3 Idiots', rating: 9},
    {title: 'Indiana Jones', rating: 3}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onMovieAdded($event: { title: string; rating: number }) {
    this.movieList.push($event);
  }

  changeFirstMovie() {
    if (this.movieList.length > 0) this.movieList[0].title += " Updated.";
  }

  deleteFirstMovie() {
    this.movieList.splice(0, 1);
  }

}
