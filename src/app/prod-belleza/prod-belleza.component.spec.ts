import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBellezaComponent } from './prod-belleza.component';

describe('ProdBellezaComponent', () => {
  let component: ProdBellezaComponent;
  let fixture: ComponentFixture<ProdBellezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdBellezaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdBellezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
