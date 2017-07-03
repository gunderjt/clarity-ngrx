/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  open: Boolean = true;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
	) {
	 }

  onCancel() {
  	this.router.navigate([{outlets: {modal: null}}]);
  }
}
