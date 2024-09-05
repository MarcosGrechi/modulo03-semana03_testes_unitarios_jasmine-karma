import { Component } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  constructor(private calculatorService: CalculadoraService) {}

  calculate() {
    this.result = this.calculatorService.somar(this.num1, this.num2);
  }

  dividirValor(){
    this.result = this.calculatorService.dividir(this.num1, this.num2);
  }
}
