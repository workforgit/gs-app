import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonDeLivraisonLayoutComponent } from './bon-de-livraison-layout.component';

describe('BonDeLivraisonLayoutComponent', () => {
  let component: BonDeLivraisonLayoutComponent;
  let fixture: ComponentFixture<BonDeLivraisonLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonDeLivraisonLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonDeLivraisonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
