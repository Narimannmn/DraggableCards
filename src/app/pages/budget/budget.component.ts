import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import {AddItemFormComponent} from "./add-item-form/add-item-form.component";
import {BudgetItemListComponent} from "./budget-item-list/budget-item-list.component";
import {BudgetItem} from "./shared/models/budget-item.model";

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule, CdkDrag, CdkDropList, CdkDropListGroup, AddItemFormComponent, BudgetItemListComponent],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  addItem(newItem:BudgetItem){
    this.budgetItems.push(newItem);
  }

  deleteItem(item: BudgetItem) {
    const index = this.budgetItems.indexOf(item)
    this.budgetItems.splice(index,1)
  }
}
