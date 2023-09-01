import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"sqrt"
})
export class SqrtPipe implements PipeTransform{
 transform(value:number){
     return value * 2
 }
}