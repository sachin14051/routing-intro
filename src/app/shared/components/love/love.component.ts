import { Component, OnInit } from '@angular/core';
import { Ireel } from '../../model/model';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.scss']
})
export class LoveComponent implements OnInit {

  public reelsArray: Array<Ireel> = [{
    title:"chANDRAYAN 3",
    isLiked : false,
    count : 123
  },
  {
    title:"chANDRAYAN 4",
    isLiked : false,
    count : 456
  },
  {
    title:"chANDRAYAN 5",
    isLiked : true,
    count : 789
  },
  
]
  constructor() { }

  ngOnInit(): void {
  }


  isclicked(eve:any) {
      console.log(eve.target as HTMLElement)
    
    }
}
