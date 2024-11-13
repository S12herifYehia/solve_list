import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  inject,
  Input,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';

// import { WOW } from 'wowjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  // encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent {
  @ViewChild('loading') load!: ElementRef;

  render: Renderer2 = inject(Renderer2);


  @Input() isbol!:ElementRef;

  


  title:Title=inject(Title)
  // constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  isloading=true
  ngAfterViewInit(): void {
  
    

    setTimeout(()=>{

      this.isloading=false
    },2000)



  }



  ngOnInit(): void {
    this.title.setTitle('Home Page')
  }





}
