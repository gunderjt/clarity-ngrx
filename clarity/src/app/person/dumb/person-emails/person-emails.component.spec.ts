import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEmailsComponent } from './person-emails.component';

describe('PersonEmailsComponent', () => {
  let component: PersonEmailsComponent;
  let fixture: ComponentFixture<PersonEmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonEmailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
