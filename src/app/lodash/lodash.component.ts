import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-lodash',
  templateUrl: './lodash.component.html',
  styleUrls: ['./lodash.component.css']
})
export class LodashComponent implements OnInit {
  arr = [9, 20, 41, 6, 45, 76, 243, 999, 3, 199, 3];
  arr2 = [1, 2, 3, false, 'shota', '', true, 55, undefined, 'shota2', null, {end: 'the end'}];

  constructor() { }

  ngOnInit() {
    // console.log(_.first(this.arr));
    // console.log(_.chunk(this.arr));
    // console.log(_.chunk(this.arr, 4));
    // console.log(_.compact(this.arr2));
    // console.log(_.drop(this.arr2));
    // console.log(_.drop(this.arr2, 9));
    // console.log(_.dropRight(this.arr2, 5));
    // console.log(_.dropWhile(this.arr, (item) => item < 200));
    // console.log(_.dropRightWhile(this.arr, (item) => item < 200));
    // console.log(this.arr);
    // console.log(_.fill(this.arr, 'G'));
    // console.log(this.arr);
    // console.log(_.fill(this.arr, '^', 4, 7));
    // console.log(this.arr);
    // console.log(_.findIndex(this.arr, a => a === 999));
    // console.log(this.arr);
    // console.log(_.findIndex(this.arr2, {end: 'the end'}));
    // console.log(this.arr2);
    // console.log(_.indexOf(this.arr2, 55));
    // console.log(this.arr2);
    // console.log(_.pull(this.arr, 3, 999));
    // console.log(this.arr);
    // console.log(_.join(this.arr2, '-'));
    // console.log(this.arr2);
    // console.log(_.reverse(this.arr2));
    // console.log(this.arr2);
    // console.log(_.without(this.arr, 3, 999));
    // console.log(this.arr);
    console.log(_.zip(this.arr, this.arr2));
    console.log(this.arr);
    console.log(this.arr2);
  }

}
