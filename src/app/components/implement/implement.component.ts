import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-implement',
  templateUrl: './implement.component.html',
  styleUrl: './implement.component.scss'
})
export class ImplementComponent {


  title:Title=inject(Title);





  ngOnInit(){
    this.title.setTitle('Implement Page')
  }





}
