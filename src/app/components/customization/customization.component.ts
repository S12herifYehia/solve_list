import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrl: './customization.component.scss'
})
export class CustomizationComponent {



  title:Title=inject(Title)


  ngOnInit(){
    this.title.setTitle('Customize Page')
  }
}
