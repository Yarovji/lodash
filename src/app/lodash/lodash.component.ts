import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lodash',
  templateUrl: './lodash.component.html',
  styleUrls: ['./lodash.component.css']
})
export class LodashComponent implements OnInit {
  arr = [1, 3, 5, 7, 8, 6, 23];
  arrObj = [{name: 'Ivan', id: 1}, {name: 'Petro', id: 0}, {name: 'Vasul', id: 3}, {name: 'Taras', id: 4}];
  str = 'hello world, I am Javascript ';
  obj = {a: 'a'};
  obj2 = this.obj;
  obj3 = {c: 'c'};

  constructor() { }

  ngOnInit() {
    // console.log(_.add(5, 9));
    // console.log(_.multiply(5, 9));
    // console.log(_.subtract(5, 9));
    // console.log(_.divide(5, 9));
    // console.log(_.max(this.arr));
    // console.log(_.maxBy(this.arrObj, 'id'));
    // console.log(_.min(this.arr));
    // console.log(_.minBy(this.arrObj, 'id'));
    // console.log(_.sum(this.arr));
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
  }

}
