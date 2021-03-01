import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModifProduitComponent } from './ajout-modif-produit.component';

describe('AjoutModifProduitComponent', () => {
  let component: AjoutModifProduitComponent;
  let fixture: ComponentFixture<AjoutModifProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutModifProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutModifProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
