import { Component, OnInit, Input } from '@angular/core';
import {entry} from '../entry'

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  entrys = [
    new entry('Monday', 'Entry1',new Date(2018,6,9) ),
    new entry('Tuesday','Entry2',new Date(2018,1,12) ),
    new entry('Wednesday','Entry3',new Date(2018,0,18) ),
    new entry('Thursday','Entry4',new Date(2018,2,14) ),
    new entry('Friday','Entry5',new Date(2018,0,18)),
    new entry('Saturday','Entry6',new Date(2018,2,14) ),
    new entry('Sunday','Entry7',new Date(2018,3,14) ),
  ]

  toogleDetails(index){
    this.entrys[index].showDescription = !this.entrys[index].showDescription;
  }

  deleteentry(isDelete,index){
    if (isDelete){
      let toDelete=confirm(`Are you sure you want to delete ${this.entrys[index].name}`)

      if(toDelete){
        this.entrys.splice(index,1);
      }
    }
  }

  constructor() { }

  ngOnInit() {

  }

}
