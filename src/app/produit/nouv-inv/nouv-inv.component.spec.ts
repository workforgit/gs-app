import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvInvComponent } from './nouv-inv.component';

describe('NouvInvComponent', () => {
  let component: NouvInvComponent;
  let fixture: ComponentFixture<NouvInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
