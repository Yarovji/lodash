import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lodash',
  templateUrl: './lodash.component.html',
  styleUrls: ['./lodash.component.css']
})
export class LodashComponent implements OnInit {
  arr = [{name: 'Ivan', id: 1}, {name: 'Petro', id: 0}, {name: 'Vasul', id: 3}, {name: 'Taras', id: 4}];

  constructor() { }

  ngOnInit() {
    console.log(_.add(5, 9));
  }

}
