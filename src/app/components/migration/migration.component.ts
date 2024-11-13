import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-migration',
  templateUrl: './migration.component.html',
  styleUrl: './migration.component.scss'
})
export class MigrationComponent {



  title:Title=inject(Title)



  ngOnInit(){
    this.title.setTitle('Migration Page')
  }

}
