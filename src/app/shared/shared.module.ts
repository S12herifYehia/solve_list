import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppScrollBarComponent } from './app-scroll-bar/app-scroll-bar.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AppScrollBarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, FooterComponent, AppScrollBarComponent],
})
export class SharedModule {}
