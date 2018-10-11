import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserListTicketComponent} from './user-list-ticket.component';

describe('UserListTicketComponent', () => {
  let component: UserListTicketComponent;
  let fixture: ComponentFixture<UserListTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListTicketComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
