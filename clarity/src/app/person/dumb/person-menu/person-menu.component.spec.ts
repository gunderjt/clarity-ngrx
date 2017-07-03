import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMenuComponent } from './person-menu.component';

describe('PersonMenuComponent', () => {
  let component: PersonMenuComponent;
  let fixture: ComponentFixture<PersonMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
