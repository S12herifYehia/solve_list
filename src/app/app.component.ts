import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  inject,
  NgZone,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';

import { Router } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private ngZone: NgZone
  ) {}



  ngOnInit(){
    AOS.init({
      offset: 200,      
      delay: 0,        
      duration: 600,   
      easing: 'ease-in-out', 
      once: true    
    }); 

    AOS.refresh();
  }


  ngAfterViewChecked(): void {
    AOS.refresh();
  }
}
