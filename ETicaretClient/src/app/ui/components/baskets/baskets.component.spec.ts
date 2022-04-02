import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketsComponent } from './baskets.component';

describe('BasketsComponent', () => {
  let component: BasketsComponent;
  let fixture: ComponentFixture<BasketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
