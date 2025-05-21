import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoitemlistService {

  constructor() { }

  todoItemsArray : TodoItem[] = [];

  SaveToDoItems(todoItems:TodoItem[]){
    // console.log(todoItems);
    this.todoItemsArray = todoItems
  }

  ReturnToDoItems(){
    return this.todoItemsArray;
  }
}
