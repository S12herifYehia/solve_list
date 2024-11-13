import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrl: './integration.component.scss'
})
export class IntegrationComponent {


  title:Title=inject(Title);





  ngOnInit(){
    this.title.setTitle('Intergration Page')
  }

}
