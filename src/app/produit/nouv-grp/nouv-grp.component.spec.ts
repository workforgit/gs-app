import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvGrpComponent } from './nouv-grp.component';

describe('NouvGrpComponent', () => {
  let component: NouvGrpComponent;
  let fixture: ComponentFixture<NouvGrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvGrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
