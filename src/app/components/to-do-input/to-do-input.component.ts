import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoItemsComponent } from '../to-do-items/to-do-items.component';
import { TodoItem } from '../../models/todo.model';
import { TodoitemlistService } from '../../services/todoitemlist.service';

@Component({
  selector: 'app-to-do-input',
  imports: [FormsModule,ToDoItemsComponent,ReactiveFormsModule],
  templateUrl: './to-do-input.component.html',
  styleUrl: './to-do-input.component.scss'
})
export class ToDoInputComponent implements OnInit {
  todoInputForm: FormGroup;
  todoItemsFromService : TodoItem[] = [];

  constructor(private fb: FormBuilder,private todoItemService:TodoitemlistService){
    this.todoInputForm = this.fb.group({
      title: ['']
    });
  }

  ngOnInit(): void {
    this.todoItemsFromService = this.todoItemService.ReturnToDoItems();
    if(this.todoItemsFromService.length > 0){
      this.toDoItems = this.todoItemsFromService;
    }
  }
  time = new Date().toLocaleTimeString();
  toDoItems : Array<TodoItem> = [];

    ToDoSubmitHandler(){
      if(this.todoInputForm.get('title')?.value){
        let startTime = new Date().toLocaleTimeString();

        this.toDoItems.push({
          id: this.toDoItems.length + 1,
          title: this.todoInputForm.get('title')?.value,
          isCompleted: false,
          userID: this.toDoItems.length + 1,
          startTime: startTime,
          endTime: ''
        })

        this.todoItemService.SaveToDoItems(this.toDoItems);
        this.todoInputForm.reset();
      }
    }

    updateTodoItemCompleteStatus(item:TodoItem){

      this.toDoItems.map((todoItem) =>{
        if(item.id === todoItem.id){
          return{
            ...todoItem,
            isCompleted: !todoItem.isCompleted,
            endTime: new Date().toLocaleDateString()
          }
        }
        this.todoItemService.SaveToDoItems(this.toDoItems);
        return todoItem;
      })

    }
}
