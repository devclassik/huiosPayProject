import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconFontComponent } from './font/font.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ButtonComponent,
    IconFontComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconFontComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
