import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {entry} from '../entry'

@Component({
  selector: 'app-write-details',
  templateUrl: './write-details.component.html',
  styleUrls: ['./write-details.component.css']
})
export class WriteDetailsComponent implements OnInit {


  @Input() entry:entry;
  @Output() isComplete= new EventEmitter<boolean>();

  entryDelete(complete:boolean){
    this.isComplete.emit(complete);

  }

  constructor() { }

  ngOnInit() {
  }

}
