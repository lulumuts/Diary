import { Component, OnInit, Input } from '@angular/core';
import {entry} from '../entry'

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  entrys = [
    new entry('Monday', 'Entry1'),
    new entry('Tuesday','Entry2'),
    new entry('Wednesday','Entry3'),
    new entry('Thursday','Entry4'),
    new entry('Friday','Entry5'),
    new entry('Saturday','Entry6'),
    new entry('Sunday','Entry7'),
  ]

  toogleDetails(index){
    this.entrys[index].showDescription = !this.entrys[index].showDescription;
  }


  constructor() { }

  ngOnInit() {

  }

}
