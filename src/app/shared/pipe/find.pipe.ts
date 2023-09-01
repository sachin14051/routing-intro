import { Pipe, PipeTransform } from '@angular/core';
import { Iname } from '../model/names';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(value: Array<Iname>, search:string): Array<Iname> {
     console.log(value);
     console.log(search);

    
    if(!value){
      return []
    }

    if(!search){
      return value
    }
    let filterArray = value.filter(obj => {
      return obj.fname.toLowerCase().includes(search.toLowerCase())
    })
    return filterArray
  }



}
