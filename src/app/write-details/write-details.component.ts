import { Component, OnInit, Input } from '@angular/core';
import {entry} from '../entry'

@Component({
  selector: 'app-write-details',
  templateUrl: './write-details.component.html',
  styleUrls: ['./write-details.component.css']
})
export class WriteDetailsComponent implements OnInit {

  @Input() entry:entry;



  constructor() { }

  ngOnInit() {
  }

}
