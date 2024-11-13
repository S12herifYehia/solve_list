import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

about:Title=inject(Title);







ngOnInit(): void {
  this.about.setTitle('About Us')
}

}
