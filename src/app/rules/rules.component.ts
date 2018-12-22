import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OptionsService } from '../shared/options.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  data;
  tabsName = [];
  columnName = [];
  objectKeys = Object.keys;
  save = {};
  searchText = '';
  searchValue = '';
  editFlag = {};
  editButtonName = {};
  editRowObj = {};
  activeIndexTab;
  reload = true;
  firstRow = false;
  dataKey;

  constructor(private http: HttpClient, private optionsService: OptionsService, private elementRef: ElementRef) {
    this.getData();
    optionsService.pushEvent.subscribe((data) => {
      this.data[data.title] = data.obj;
      console.log(Object.keys(this.data).length - 1);
      this.dataKeyEvent(Object.keys(this.data)[Object.keys(this.data).length - 1]);
      this.rebuild(Object.keys(this.data)[Object.keys(this.data).length - 1]);
    });
  }

  getData() {

    this.getJSON().subscribe((data) => {
      for (const key in data[Object.keys(data)[0]][0]) {
        if (data[Object.keys(data)[0]][0].hasOwnProperty(key)) {
        this.save[key] = '';
        }
      }

      this.data = data;
      console.log(this.data);
      this.dataKeyEvent(Object.keys(this.data)[0])

    });
  }

  dataKeyEvent(key: any) {
    this.dataKey = key;
    console.log(this.dataKey, 'this.dataKey', key, 'key');
  }

  closeTabButton(itemIndex) {
    console.log(itemIndex);
    let indexKey = 0;
    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        if (indexKey === itemIndex) {
          delete this.data[key];
        }
        indexKey++;
      }
    }

    this.dataKey = Object.keys(this.data)[0]
  }

  editRow(key, i, item, flag?) {
    const name = key + i;
    this.editFlag[name] = !this.editFlag[name];
    this.editButtonName[name] = !this.editButtonName[name];

    if (flag) {
      for (const k in this.data[key][0]) {
        if (this.data[key][0].hasOwnProperty(key)) {
          this.editRowObj[k + i] = item[k];
        }
      }
    } else {
      for (const k in this.data[key][0]) {
        if (this.data[key][0].hasOwnProperty(key)) {
          item[k] = this.editRowObj[k + i];
        }

      }
    }
  }

  filterData(e, key, k) {
    this.searchText = this.save[k];
    this.searchValue = this.save[k];
  }

  public getJSON() {
    return this.http.get('./assets/test.json');
  }

  ngOnInit() {}

  add(key) {
    this.reload = false;
    this.firstRow = true;
    const obj = Object.assign({}, this.save);
    console.log(obj, this.data[key], key, this.data);
    this.data[key].unshift(obj);
    setTimeout(() => {
      this.reload = true;
      this.clear();
      this.searchText = '';
    }, 100);
    setTimeout(() => {
      this.firstRow = false;
    }, 1000);
  }

  clear() {
    for (const key in this.save) {
      if (this.save.hasOwnProperty(key)) {
        this.save[key] = '';
      }
    }
    this.searchText = ' ';
  }

  rebuild(k) {
    this.save = {};
    for (const key in this.data[k][0]) {
      if (this.data[k][0].hasOwnProperty(key)) {
        this.save[key] = '';
      }
    }
    console.log(k);
  }
}
