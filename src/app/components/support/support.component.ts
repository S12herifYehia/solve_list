import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {


  title:Title=inject(Title)



  ngOnInit(){
    this.title.setTitle('Support Page')
  }
}
