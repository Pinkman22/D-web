import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: false,

  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {

  name: string = 'ASHIK';

  changeName(newName: string): void {
    this.name = newName;
  }
}
