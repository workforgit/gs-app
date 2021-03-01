import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LstFournisseursComponent } from './lst-fournisseurs.component';

describe('LstFournisseursComponent', () => {
  let component: LstFournisseursComponent;
  let fixture: ComponentFixture<LstFournisseursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstFournisseursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
