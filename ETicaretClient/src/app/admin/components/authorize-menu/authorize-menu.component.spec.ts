import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeMenuComponent } from './authorize-menu.component';

describe('AuthorizeMenuComponent', () => {
  let component: AuthorizeMenuComponent;
  let fixture: ComponentFixture<AuthorizeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizeMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
