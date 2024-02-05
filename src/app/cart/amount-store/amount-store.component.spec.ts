import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountStoreComponent } from './amount-store.component';

describe('AmountStoreComponent', () => {
  let component: AmountStoreComponent;
  let fixture: ComponentFixture<AmountStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmountStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmountStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
