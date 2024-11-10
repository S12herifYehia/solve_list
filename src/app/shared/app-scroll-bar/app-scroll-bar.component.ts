import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
// import { platformBrowser } from '@angular/platform-browser';

import { gsap } from 'gsap';

import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

@Component({
  selector: 'app-app-scroll-bar',
  templateUrl: './app-scroll-bar.component.html',
  styleUrl: './app-scroll-bar.component.scss',
})
export class AppScrollBarComponent {
  @ViewChild('bar') bar!: ElementRef;
  @ViewChild('val') val!: ElementRef;

  render: Renderer2 = inject(Renderer2);

  ngAfterViewInit(): void {
    if (this.bar && this.val) {
      this.scrolling();
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    this.scrolling();
  }

  scrolling() {
    if (isPlatformBrowser(this.platformId)) {
      var top = document.documentElement.scrollTop;

      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      var val = Math.round((top / height) * 100);

      if (top >= 300) {
        this.render.addClass(this.bar.nativeElement, 'show');
      } else {
        this.render.removeClass(this.bar.nativeElement, 'show');
      }

      this.render.setStyle(
        this.bar.nativeElement,
        'background',
        `conic-gradient( #000000 ${val}% ,#FF4E02  ${val}%)`
      );
    }
  }

  onScrollTop() {
    gsap.to(window, { scrollTo: 0, duration: 1, ease: 'power2.inOut' });
  }
}
