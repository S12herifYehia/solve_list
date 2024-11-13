import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  
  title:Title=inject(Title);



  ngOnInit(){
    this.title.setTitle('Contact Us')
  }




}
