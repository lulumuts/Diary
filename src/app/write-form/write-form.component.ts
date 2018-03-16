import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {entry} from '../entry'

@Component({
  selector: 'app-write-form',
  templateUrl: './write-form.component.html',
  styleUrls: ['./write-form.component.css']
})
export class WriteFormComponent implements OnInit {
  newentry= new entry("","",new Date());
  @Output() addentry=new EventEmitter<entry>();
  

  submitentry(){
    this.addentry.emit(this.newentry);
  }
  constructor() { }

  ngOnInit() {
  }

}
