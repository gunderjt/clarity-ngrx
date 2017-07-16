import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEmailsListComponent } from './person-emails-list.component';

describe('PersonEmailsListComponent', () => {
  let component: PersonEmailsListComponent;
  let fixture: ComponentFixture<PersonEmailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonEmailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEmailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
