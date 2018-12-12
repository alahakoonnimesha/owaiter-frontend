import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloginformComponent } from './userloginform.component';

describe('UserloginformComponent', () => {
  let component: UserloginformComponent;
  let fixture: ComponentFixture<UserloginformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserloginformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
