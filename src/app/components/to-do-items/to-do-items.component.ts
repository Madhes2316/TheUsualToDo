import { Component, input, output } from '@angular/core';
import { TodoItem } from '../../models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-items',
  imports: [CommonModule],
  templateUrl: './to-do-items.component.html',
  styleUrl: './to-do-items.component.scss'
})
export class ToDoItemsComponent {
  time = new Date().toLocaleTimeString();

  todoStatusChange = output<TodoItem>();

  toDoItemsFromParent = input.required<TodoItem[]>();

  TodoItemButtonHandler(item:TodoItem){
    console.log(item);
    let endTime = new Date().toLocaleTimeString();
    item.isCompleted = true;
    item.endTime = endTime;
    this.todoStatusChange.emit(item);
  }
}
