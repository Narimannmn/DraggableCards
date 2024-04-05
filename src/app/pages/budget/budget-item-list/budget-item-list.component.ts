import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BudgetItemCardComponent} from "./budget-item-card/budget-item-card.component";
import {BudgetItem} from "../shared/models/budget-item.model";
import {Dialog, DialogModule} from '@angular/cdk/dialog';
import {EditItemModalComponent} from "../edit-item-modal/edit-item-modal.component";

@Component({
  selector: 'app-budget-item-list',
  standalone: true,
  imports: [CommonModule, BudgetItemCardComponent,DialogModule],
  templateUrl: './budget-item-list.component.html',
  styleUrl: './budget-item-list.component.css'

})
export class BudgetItemListComponent {
  @Input() budgetItems: BudgetItem[] = [new BudgetItem('Test', 5),new BudgetItem('Test', 8)];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor(public dialog: Dialog) {}
  onDeleteXBtn(item: BudgetItem) {
    this.delete.emit(item)
  }
  OnCardClick(item:BudgetItem) {
    // const dialogRef = this.dialog.open(EditItemModalComponent, {
    //   data: item,
    // });
    //
    // dialogRef.closed.subscribe(result => {
    //   if (result) {
    //     if (result instanceof BudgetItem) {
    //       this.budgetItems[this.budgetItems.indexOf(item)] = result
    //     }
    //   }
    // });

  }
}
