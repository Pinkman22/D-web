import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
// import { saveAs } from 'file-saver';
import { saveAs } from 'file-saver-es'

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  showHeader: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.showHeader = !this.router.url.startsWith('/ROCXSTAR');
    });
  }

  togo1() {
    this.router.navigate(['/home'])
  }

  togo2() {
    this.router.navigate(['/about'])
  }

  togo3() {
    this.router.navigate(['/slider'])
  }

  togo4() {
    this.router.navigate(['/contact'])
  }

  togo5() {
    this.router.navigate(['/test'])
  }

  togo6() {
    this.router.navigate(['/ROCXSTAR'])
  }


  downloadPDF(): void {
    const pdfUrl = 'resume.pdf'; // Replace with the actual URL or path to your PDF

    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, 'Ashik_Resume.pdf'); // You can specify the desired filename here
      })
      .catch(error => {
        console.error('Error downloading PDF:', error);
      });
  }


  sterio1() {
    const audio = new Audio('game-spin.mp3');
    audio.play();
  }

  sterio2() {
    const audio = new Audio('coin.mp3');
    audio.play();
  }

  sterio3() {
    const audio = new Audio('notify.mp3');
    audio.play();
  }

  sterio4() {
    const audio = new Audio('bells.mp3');
    audio.play();
  }

  jump() {
    const audio = new Audio('jump.mp3');
    audio.play();
  }

  jump2() {
    const audio = new Audio('jump2.mp3');
    audio.play();
  }

  map() {
    const audio = new Audio('map.mp3');
    audio.play();
  }

}
