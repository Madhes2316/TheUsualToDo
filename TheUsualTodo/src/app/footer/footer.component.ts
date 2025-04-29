import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

    currentYear = new Date().getFullYear();
    copyRightText = signal(`@TheUsualToDo - ${this.currentYear}`)
}
