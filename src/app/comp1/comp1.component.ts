import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp1',
  // templateUrl: './comp1.component.html',
  // template: '<h1>' + 'This is the Comp1 Component.' + '</h1>',
  template: `
    <h2>
      This is the Comp1 Component.!
    </h2>
  `,
  // styleUrls: ['./comp1.component.css']
  styles: ['h2{color: white; background-color: black;}']
/*
  styles: [`
    h1 {
      background-color: black;
      color: white;
    }
  `]
*/
})
export class Comp1Component implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

}
