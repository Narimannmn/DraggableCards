import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BudgetItem} from "../../shared/models/budget-item.model";

@Component({
  selector: 'app-budget-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budget-item-card.component.html',
  styleUrl: './budget-item-card.component.css'
})
export class BudgetItemCardComponent {
  @Input() item: BudgetItem = new BudgetItem('',0);
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>()
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>()
  OnXButtonClick() {
    this.xButtonClick.emit()
  }
  OnCardClick() {
    this.cardClick.emit()
  }
}
