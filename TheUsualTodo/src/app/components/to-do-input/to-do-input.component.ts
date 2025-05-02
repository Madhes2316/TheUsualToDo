import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoItemsComponent } from '../to-do-items/to-do-items.component';
import { TodoItem } from '../../models/todo.model';

@Component({
  selector: 'app-to-do-input',
  imports: [FormsModule,ToDoItemsComponent,ReactiveFormsModule],
  templateUrl: './to-do-input.component.html',
  styleUrl: './to-do-input.component.scss'
})
export class ToDoInputComponent {
  todoInputForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.todoInputForm = this.fb.group({
      title: ['']
    });
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
        return todoItem;
      })

    }
}
