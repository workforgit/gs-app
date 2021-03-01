import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcheanceDesChequesComponent } from './echeance-des-cheques.component';

describe('EcheanceDesChequesComponent', () => {
  let component: EcheanceDesChequesComponent;
  let fixture: ComponentFixture<EcheanceDesChequesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcheanceDesChequesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcheanceDesChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
