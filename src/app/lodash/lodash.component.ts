import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lodash',
  templateUrl: './lodash.component.html',
  styleUrls: ['./lodash.component.css']
})
export class LodashComponent implements OnInit {
  arrL3 = [1, 3, 5, 7, 8, 6, 23];
  arrObj = [{name: 'Ivan', id: 1}, {name: 'Petro', id: 0}, {name: 'Vasul', id: 3}, {name: 'Taras', id: 4}];
  str = 'hello world, I am Javascript ';
  obj = {a: 'a'};
  obj2 = this.obj;
  obj3 = {c: 'c'};
  arrC = [{name: 'Ivan', id: 1}, {name: 'Petro', id: 0}, {name: 'Vasul', id: 3}, {name: 'Taras', id: 4}];
  arr = [9, 20, 41, 6, 45, 76, 243, 999, 3, 199, 3];
  arr2 = [1, 2, 3, false, 'shota', '', true, 55, undefined, 'shota2', null, {end: 'the end'}];
  arrO = [{name: 'Ivan', id: 1}, {name: 'Petro', id: 0}, {name: 'Vasul', id: 3}, {name: 'Taras', id: 4}];

  constructor() { }

  ngOnInit() {
    // console.log(_.add(5, 9));
    // console.log(_.multiply(5, 9));
    // console.log(_.subtract(5, 9));
    // console.log(_.divide(5, 9));
    // console.log(_.max(this.arrL3));
    // console.log(_.maxBy(this.arrObj, 'id'));
    // console.log(_.min(this.arrL3));
    // console.log(_.minBy(this.arrObj, 'id'));
    // console.log(_.sum(this.arrL3));
    // console.log(_.sumBy(this.arrObj, 'id'));
    // console.log(_.camelCase(this.str));
    // console.log(_.lowerCase(this.str));
    // console.log(_.upperCase(this.str));
    // console.log(_.capitalize(this.str));
    // console.log(_.trim(this.str));
    // console.log(_.trimStart(this.str));
    // console.log(_.trimEnd(this.str));
    // console.log(_.words(this.str));
    // console.log(_.repeat(this.str, 3));
    // console.log(_.isString(this.str));
    // console.log(_.isSymbol(this.str));
    // console.log(_.isTypedArray(this.str));
    // console.log(_.isUndefined(this.str));
    // console.log(_.isNaN(this.str));
    // console.log(_.isNull(this.str));
    // console.log(_.isNumber(this.str));
    // console.log(_.isBoolean(this.str));
    // console.log(_.isArguments(this.str));
    // console.log(this.obj);
    // console.log(this.obj2 = _.clone(this.obj));
    // console.log(this.obj2 = _.cloneDeep(this.obj));
    // console.log(this.obj2.a = 'b');
    // console.log(this.obj);
    // console.log(this.obj2);
    // console.log(_.assign({q: 'q'}, this.obj2, this.obj3));
    // console.log(_.extend({q: 'q'}, this.obj2, this.obj3));
    // console.log(_.range(10));
    // console.log(_.delay((arg) => console.log('delayWork ' + arg), 3000, '3 arg'));
    // console.log(_.uniqueId('perf_'));
    // console.log(_.uniqueId('perf_'));
    // console.log(_.each(this.arrC, item => console.log(item.id + 5)));
    // console.log(this.arrC);
    // console.log(_.map(this.arrC, item => {
    //   return (item.id + 5);
    // }));
    // console.log(this.arrC);
    // console.log(_.map(this.arrC, 'name'));
    // console.log(this.arrC);
    // console.log(_.filter(this.arrC, 'id'));
    // console.log(this.arrC);
    // console.log(_.find(this.arrC, (item) => item.id === 0));
    // console.log(this.arrC);
    // console.log(_.findLast(this.arrC, 'name'));
    // console.log(this.arrC);
    // console.log(_.reject(this.arrC, 'id'));
    // console.log(this.arrC);
    // console.log(_.shuffle(this.arrC));
    // console.log(this.arrC);
    // console.log(_.size(this.arrC));
    // console.log(this.arrC);
//     console.log(_.sortBy(this.arrC, [o => o.id]));
//     console.log(this.arrC);
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
//     console.log(_.zip(this.arr, this.arr2));
//     console.log(this.arr);
//     console.log(this.arr2);
  }

}
