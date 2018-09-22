import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerMeatComponent } from './burger-meat.component';

describe('BurgerMeatComponent', () => {
  let component: BurgerMeatComponent;
  let fixture: ComponentFixture<BurgerMeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerMeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
