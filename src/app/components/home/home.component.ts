import {
  Component,
  ElementRef,
  inject,
  Renderer2,
  ViewChild,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  // encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent {
  @ViewChild('loading') load!: ElementRef;

  render: Renderer2 = inject(Renderer2);


  isloading=true
  ngAfterViewInit(): void {
 

    // if()

    setTimeout(()=>{

      // this.isloading=false;


      this.render.addClass(this.load.nativeElement,'show')
    },3000)
    
  }
}
