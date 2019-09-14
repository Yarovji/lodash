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
    // console.log(_.each(this.arr, item => console.log(item.id + 5)));
    // console.log(this.arr);
    // console.log(_.map(this.arr, item => {
    //   return (item.id + 5);

    // }));
    // console.log(this.arr);
    // console.log(_.map(this.arr, 'name'));
    // console.log(this.arr);
    // console.log(_.filter(this.arr, 'id'));
    // console.log(this.arr);
    // console.log(_.find(this.arr, (item) => item.id === 0));
    // console.log(this.arr);
    // console.log(_.findLast(this.arr, 'name'));
    // console.log(this.arr);
    // console.log(_.reject(this.arr, 'id'));
    // console.log(this.arr);
    // console.log(_.shuffle(this.arr));
    // console.log(this.arr);
    // console.log(_.size(this.arr));
    // console.log(this.arr);
    console.log(_.sortBy(this.arr, [o => o.id]));
    console.log(this.arr);


  }

}
