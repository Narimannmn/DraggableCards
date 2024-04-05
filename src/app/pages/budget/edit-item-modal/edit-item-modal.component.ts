import {Component, Inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BudgetItem} from "../shared/models/budget-item.model";
import {AddItemFormComponent} from "../add-item-form/add-item-form.component";
import {DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
@Component({
  selector: 'app-edit-item-modal',
  standalone: true,
  imports: [CommonModule, AddItemFormComponent,DialogModule],
  templateUrl: './edit-item-modal.component.html',
  styleUrl: './edit-item-modal.component.css'
})
export class EditItemModalComponent {
  @Input() item: BudgetItem = new BudgetItem('', 0);
  constructor(@Inject(DIALOG_DATA) public data: BudgetItem) { }

  onSubmited(item: BudgetItem) {

  }
}
