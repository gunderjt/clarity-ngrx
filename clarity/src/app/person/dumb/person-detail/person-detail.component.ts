import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Person } from "../../../shared/sdk/models";

@Component({
  selector: 'person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonDetailComponent implements OnInit {
	@Input() person: Person;
	@Output() edit = new EventEmitter();
  @Output() back = new EventEmitter();
  @Output() delete = new EventEmitter();

  public model_open: boolean = false;
  public name: string = '';

  confirmDelete() {
    this.model_open = false;
    this.name = "";
    this.delete.emit(this.person);
  }



  constructor(

  ) { }

  ngOnInit() {
  }
}
