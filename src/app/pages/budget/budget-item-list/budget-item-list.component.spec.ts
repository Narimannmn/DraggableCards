import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemListComponent } from './budget-item-list.component';

describe('BudgetItemListComponent', () => {
  let component: BudgetItemListComponent;
  let fixture: ComponentFixture<BudgetItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetItemListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudgetItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
