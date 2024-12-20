import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import emailjs from 'emailjs-com';



@Component({
  selector: 'app-contact',
  standalone: false,

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  constructor( private http: HttpClient) { }

  'fg': FormGroup;
  name_fc = new FormControl(null, Validators.required)
  email_fc = new FormControl(null, [Validators.required, Validators.email]);
  message_fc = new FormControl(null, Validators.required);

  ngOnInit() {
    this.fg = new FormGroup({
      name_fc: this.name_fc,
      email_fc: this.email_fc,
      message_fc: this.message_fc,
    });
  }

  

  sendEmail(event: Event): void {
    event.preventDefault(); // Prevent default form submission

    const serviceID = 'service_wgvov0g';
    const templateID = 'template_5lcqo5r';
    const publicKey = 'GIKF8rezGKjiXg8x5';

    const form = event.target as HTMLFormElement; // Get the form element from the event

    emailjs.sendForm(serviceID, templateID, form, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
        form.reset(); // Reset the form after sending
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email. Please try again later.');
      });
  }




}
