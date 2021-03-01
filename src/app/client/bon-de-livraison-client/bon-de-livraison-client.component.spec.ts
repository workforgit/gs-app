import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonDeLivraisonClientComponent } from './bon-de-livraison-client.component';

describe('BonDeLivraisonClientComponent', () => {
  let component: BonDeLivraisonClientComponent;
  let fixture: ComponentFixture<BonDeLivraisonClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonDeLivraisonClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonDeLivraisonClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
