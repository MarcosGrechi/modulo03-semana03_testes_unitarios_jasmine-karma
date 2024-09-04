import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  somar(a: number, b: number): number {
    return a + b;
  }
  
}
