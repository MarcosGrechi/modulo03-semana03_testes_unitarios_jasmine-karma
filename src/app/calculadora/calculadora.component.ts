import { Component } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  calculate() {
    throw new Error('Method not implemented.');
  }
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  constructor(private calculadoraService: CalculadoraService) {}

  somar() {
    this.result = this.calculadoraService.somar(this.num1, this.num2);
  }

  subtrair() {
    this.result = this.calculadoraService.subtrair(this.num1, this.num2);
  }

  multiplicar() {
    this.result = this.calculadoraService.multiplicar(this.num1, this.num2);
  }

  dividir() {
    if (this.num2 === 0) {
      alert('Não é possível dividir por zero!');
    } else {
      this.result = this.calculadoraService.dividir(this.num1, this.num2);
    }
  }
}
