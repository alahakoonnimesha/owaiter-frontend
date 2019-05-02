import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmenubarComponent } from './adminmenubar.component';

describe('AdminmenubarComponent', () => {
  let component: AdminmenubarComponent;
  let fixture: ComponentFixture<AdminmenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
