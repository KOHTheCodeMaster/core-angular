import {Component, OnInit} from '@angular/core';

@Component({
  // selector: 'app-comp1',   //  CSS selector
  // selector: '[app-comp1]', //  Attribute selector
  selector: '.app-comp1',     //  Class selector
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

}
