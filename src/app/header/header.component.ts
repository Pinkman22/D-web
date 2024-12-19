import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) { }

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

  // slider() {
  //   this.router.navigate(['/slider'])
  // }

  downloadPDF(): void {
    const pdfUrl = 'resume.pdf'; // Replace with the actual URL or path to your PDF

    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, 'downloaded.pdf'); // You can specify the desired filename here
      })
      .catch(error => {
        console.error('Error downloading PDF:', error);
      });                 
  }
  
  

}
