import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseStoreService } from '../../../store/services/base-store.service';

export abstract class BaseFormComponent implements OnInit, OnDestroy {
	/*Local Params*/
	protected ngUnsubscribe: Subject<void> = new Subject<void>();
	protected id: string = null;
	public injectedModel: any = null;
	protected updated: boolean = false;
	public loading$: Observable<boolean>;

	abstract createModel(data);
	abstract updateModel(data);
	abstract afterSave(data);

	constructor(
		protected route: ActivatedRoute,
		protected store: BaseStoreService,
	) {}

	ngOnInit() {
		this.assignId();
		this.initInjectedModel();
		this.initAfterSave();
	}

	assignId() {
		this.route.params
		.takeUntil(this.ngUnsubscribe)
		.subscribe(params => {
       this.id = params['id'];
    });
	}

	initAfterSave() {
		this.store.model$
		.takeUntil(this.ngUnsubscribe)
		.subscribe(
			(model) => {
				if(this.updated) {
					this.updated = false;
					this.afterSave(model);
				}
			}
		)
	}

	initInjectedModel() {
		this.store.model$
		.takeUntil(this.ngUnsubscribe)
		.subscribe(
			(model) => {
				if(this.id) {
					this.injectTheModel(model);
				}
				else {
					this.injectedModel = this.store.newModel();
				}
			}
		)
	}

	injectTheModel(model) {
		if(Array.isArray(model)) {
			model.forEach((obj) => {
				if(obj.id === this.id) {
					this.injectedModel = obj;
				}
			})
		} else {
			this.injectedModel = model;
		}
	}

	onSave(data) {
		this.updated = true;
		if(this.id) {
			this.updateModel(data);
		} else {
			this.createModel(data);
		}
	}

	ngOnDestroy() {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}