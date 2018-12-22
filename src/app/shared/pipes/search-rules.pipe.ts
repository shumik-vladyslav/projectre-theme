import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRules'
})
export class SearchRulesPipe implements PipeTransform {

  transform(users, value, key) {
    console.log(users, value, key)
    let arr = users;
    for(let k in value){
      arr = arr.filter(user => {
        if(user[k])
        return user[k].toLowerCase().includes(value[k].toLowerCase());
      });
    }
    console.log(arr);
    return arr;
    }

    // if(users){
    // return users.filter(user => {
    //   if(user[key])
    //   return user[key].toLowerCase().includes(value.toLowerCase());
    // });}
  }

