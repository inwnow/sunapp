import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdHComponent } from './opd-h.component';

describe('OpdHComponent', () => {
  let component: OpdHComponent;
  let fixture: ComponentFixture<OpdHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
