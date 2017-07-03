import { Injectable } from '@angular/core';
import * as tokenizer from 'search-text-tokenizer';
import { LoopBackFilter } from "../../shared/sdk/models";

@Injectable()
export class FilterService {
	private filters: {type:string, filter:LoopBackFilter}[];

  constructor() { }

  getFilter(type:string) {
  	
  }

  whereFilter(input:string) {
  	var tokens = tokenizer(input);

  }

  findFilter(type:string, filter:any) {
  	return filter.type === type;
  }
}
