import { Directive, ElementRef, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({ selector: '[validate]' })
export class validationDirective {
    constructor(el: ElementRef, private formControl: NgControl) {
    	
    }
}