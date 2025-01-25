import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm = {
    name: '',
    question: ''
  };

  constructor(private http: HttpClient) {}

  sendEmail(event: Event): void {
    event.preventDefault();

    const emailData = {
      to: ['a@gmail.com', 'b@gmail.com', 'c@gmail.com'], // Replace with actual email addresses
      subject: `Question from ${this.contactForm.name}`,
      body: `Name: ${this.contactForm.name}\nQuestion: ${this.contactForm.question}`
    };

    this.http.post('/api/sendEmail', emailData).subscribe(
      () => {
        alert('Your question has been sent!');
        this.contactForm = { name: '', question: '' }; // Reset form
      },
      (error) => {
        console.error('Error sending email:', error);
        alert('Failed to send your question. Please try again.');
      }
    );
  }
}
