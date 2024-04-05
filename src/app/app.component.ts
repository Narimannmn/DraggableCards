import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { Routes, RouterOutlet } from '@angular/router';
import {MainViewComponent} from "./pages/main-view/main-view.component";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BudgetComponent} from "./pages/budget/budget.component";

//const routes : Routes = [
  //{ path : '', component: MainViewComponent}
//]
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainViewComponent, DragDropModule, BudgetComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DragglbleCards';
}
