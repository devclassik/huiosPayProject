import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconFontComponent } from './font/font.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    NavbarComponent,
    IconFontComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports:[
    NavbarComponent,
    IconFontComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
