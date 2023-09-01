import { Pipe, PipeTransform } from "@angular/core";
import { Iname } from "../model/names";

@Pipe({
    name: 'filter'
})


export class FilterPipe implements PipeTransform{
    transform(value : Array<Iname>, searchvalue : string) : Iname[] {
         
        if(!value){
            return []
        }
        if(!searchvalue){
            return value
        }


        let filterArray = value.filter(obj => {
         return   obj.fname.toLowerCase().includes(searchvalue)
         
        })
        return filterArray

    }
}
