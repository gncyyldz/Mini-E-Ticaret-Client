import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketItemRemoveDialogComponent } from './basket-item-remove-dialog.component';

describe('BasketItemRemoveDialogComponent', () => {
  let component: BasketItemRemoveDialogComponent;
  let fixture: ComponentFixture<BasketItemRemoveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketItemRemoveDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketItemRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
