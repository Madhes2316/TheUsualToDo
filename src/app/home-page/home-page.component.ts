import { Component } from '@angular/core';
import { ToDoInputComponent } from '../components/to-do-input/to-do-input.component';

@Component({
  selector: 'app-home-page',
  imports: [ToDoInputComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
