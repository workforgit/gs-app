import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoProdComponent } from './histo-prod.component';

describe('HistoProdComponent', () => {
  let component: HistoProdComponent;
  let fixture: ComponentFixture<HistoProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
