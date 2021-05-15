import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  name: string = "John Doe";
  age: number = 45;
  disableAgePlus: boolean = true;
  disableAgeMinus: boolean = true;

  constructor() {

    setTimeout(() => {
      this.disableAgePlus = false;
      this.disableAgeMinus = false;
    }, 2000);

  }

  incrementAge() {
    this.age++;
    if (this.age == 50) this.disableAgePlus = true;
    if (this.age < 50) this.disableAgeMinus = false;
  }

  decrementAge() {
    this.age--;
    if (this.age == 40) this.disableAgeMinus = true;
    if (this.age > 40) this.disableAgePlus = false;
  }

  getAge(): number {
    return this.age;
  }

  ngOnInit(): void {
  }

}
