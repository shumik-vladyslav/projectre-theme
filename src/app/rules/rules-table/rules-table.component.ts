import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from 'events';
import { OptionsService } from '../../shared/options.service';

@Component({
  selector: 'app-rules-table',
  templateUrl: './rules-table.component.html',
  styleUrls: ['./rules-table.component.css']
})
export class RulesTableComponent implements OnInit {
  data;
  dataInfo = {};
  tabsName = [];
  columnName = [];
  objectKeys = Object.keys;
  save = {};
  searchText = '';
  searchValue = '';
  editFlag = {};
  editButtonName = {};
  editRowObj = {};

  @Input() key;
  @Input() source;
  @Output() pushEvent = new EventEmitter();

  constructor(private http: HttpClient, private optionsService: OptionsService) {
  }

  getData() {
      let data = this.source;
      for(let key in data[this.key].data[0]){
    }
      this.data = data[this.key].data;
      console.log(this.data);
  }

  clickCreateNewTab(item){
    let count = 0;
    let title = "";
    for(let key in this.data[0]){
      console.log(key)
      if(count === 0 ){
        title += item[key]
      }
      if(count === 1 ){
        title += '(' + item[key] + ')';
      }
      count ++ ;
    }

    this.optionsService.pushEvent.emit({
      title: title,

     obj: {
      data: this.data,
      type: 'add',
     }

    })

  }

  editRow(key, i, item, flag?) {
    let name = key + i;
    this.editFlag[name] = !this.editFlag[name];
    this.editButtonName[name] = !this.editButtonName[name];

    if(flag){
      for (const k in this.data[0]) {
        this.editRowObj[k + i] = item[k];
      }
    } else {
      for (const k in this.data[0]) {
        item[k] = this.editRowObj[k + i];
      }
    }
  }

  filterData(e, key, k){
    this.searchText = this.save[k];
    this.searchValue = this.save[k];
  }

  public getJSON() {
    return this.http.get("./assets/test.json")
  }

  ngOnInit() {
    this.getData();
  }
  
  reload = true;
  firstRow = false;

  add(key){
    this.reload = false;
    this.firstRow = true;
    let obj = Object.assign({}, this.save);;
    this.data.unshift(obj);
    setTimeout(() => {
      this.reload = true;
      this.clear();
      this.searchText = '';
    }, 100);
    setTimeout(() => {
      this.firstRow = false;
    }, 1000);
  }


  clear(){
    for(let key in this.save){
      this.save = "";
    }
    this.searchText = ' ';
  }

  rebuild(k){
    this.save = {};
    for(let key in this.data[k.toLowerCase()][0]){
      this.save = "";
    }
    console.log(k.toLowerCase())
  }
}
