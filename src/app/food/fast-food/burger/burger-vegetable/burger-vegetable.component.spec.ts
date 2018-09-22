import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerVegetableComponent } from './burger-vegetable.component';

describe('BurgerVegetableComponent', () => {
  let component: BurgerVegetableComponent;
  let fixture: ComponentFixture<BurgerVegetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerVegetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerVegetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
