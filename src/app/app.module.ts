import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculadoraService } from './services/calculadora.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    FormsModule
  ],
  providers: [CalculadoraService],
  bootstrap: []
})
export class AppModule { }