import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Ireel } from './shared/model/model';
import { Iname } from './shared/model/names';
import { persons } from './shared/const/names';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 search !:string
  title = 'revision';
  searchvalue !:string;
  public personArray: Array<Iname> = persons;

  public arr : number = 5;
  total = 10

  


  ngOnInit(): void {

  }



}
