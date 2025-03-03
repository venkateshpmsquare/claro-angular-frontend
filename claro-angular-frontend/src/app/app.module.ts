import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }