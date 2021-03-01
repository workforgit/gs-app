import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureLayoutComponent } from './facture-layout.component';

describe('FactureLayoutComponent', () => {
  let component: FactureLayoutComponent;
  let fixture: ComponentFixture<FactureLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
