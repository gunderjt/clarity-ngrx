import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoopBackFilter } from '../../../shared/sdk/models';
import * as tokenizer from 'search-text-tokenizer';

@Component({
  selector: 'person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.scss']
})
export class PersonSearchComponent implements OnInit {
	@Output() filter = new EventEmitter();
	public values = [];

  constructor() { }

  onEnter(input:string) {
  	this.filter.emit(input);
  }

  ngOnInit() {
  }

}
