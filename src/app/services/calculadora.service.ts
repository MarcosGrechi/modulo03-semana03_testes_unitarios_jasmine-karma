import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  static dividir: any;

  somar(a: number, b: number): number {
    return a + b;
  }

  dividir(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error('Divisão por zero');
    }
    return num1 / num2;
  }

  subtrair(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiplicar(num1: number, num2: number): number {
    return num1 * num2;
  }
  
}
