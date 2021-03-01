import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevieComponent } from './devie.component';

describe('DevieComponent', () => {
  let component: DevieComponent;
  let fixture: ComponentFixture<DevieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
