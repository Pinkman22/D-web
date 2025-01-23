import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rstar',
  standalone: false,
  
  templateUrl: './rstar.component.html',
  styleUrl: './rstar.component.scss'
})
export class RstarComponent {

  constructor(private router: Router) { };
  

  name: string = 'ASHIK';

  changeName(newName: string): void {
    this.name = newName;
  }

  togo1() {
    this.router.navigate(['/home'])
  }
  sterio1() {
    const audio = new Audio('game-spin.mp3');
    audio.play();
  }

  jump() {
    const audio = new Audio('jump2.mp3');
    audio.play();
  }

  touch() {
    const audio = new Audio('winning.mp3');
    audio.play();
  }

  //  playAudio() {
  //   const audio = document.getElementById('audioPlayer');
  //   Audio.play();
  // }
  
  //  pauseAudio() {
  //   const audio = document.getElementById('audioPlayer');
  //   Audio.pause();
  // }
  
}
