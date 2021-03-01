import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonDeLivraisonFournisseurComponent } from './bon-de-livraison-fournisseur.component';

describe('BonDeLivraisonFournisseurComponent', () => {
  let component: BonDeLivraisonFournisseurComponent;
  let fixture: ComponentFixture<BonDeLivraisonFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonDeLivraisonFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonDeLivraisonFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
