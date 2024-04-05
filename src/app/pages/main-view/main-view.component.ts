import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList, CdkDropListGroup,
} from '@angular/cdk/drag-drop';

import { Board } from '../../models/board.model';
import { Column } from '../../models/column.model';
@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CommonModule, CdkDropList, CdkDrag, CdkDropListGroup],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent implements OnInit{
  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      'Get up',
      'Brush teeth'
    ]),
    new Column('Research', [
      "Lorem ipsum",
      "foo",
      "This was in the 'Research' column"
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ]);
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  ngOnInit(): void {
  }
}
