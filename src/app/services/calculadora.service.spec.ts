import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve lançar um erro ao tentar dividir por zero (usando o toThrow)', () => {
    expect(() => service.dividir(10,0)).toThrow();
  });

  it('deve lançar um erro ao tentar dividir por zero (usando o toThrowError)', () => {
    expect(() => { throw new Error('Numero dividido por zero') }).toThrowError('Numero dividido por zero');
  });

  it('deve observar a função de somar de spyOn com o retorno fixo', () => {
    const spy = spyOn(service, 'somar').and.returnValue(5);

    const result = service.somar(4, 7);
    console.log("resultado:", result);
    expect(result).toBe(5);
  });

  it('deve observar a função de somar de spyOn com o retorno original', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    const result = service.somar(4, 7);
    console.log("resultado:", result);
    expect(result).toBe(11);
  });

  it('deve observar a função de somar de spyOn com o retorno original', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    const result = service.somar(4, 7);
    console.log("resultado:", result);
    expect(result).toBe(11);
  });

  it('deve observar a função de somar de spyOn com o retorno original', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    const result = service.somar(4, 7);
    console.log("resultado:", result);
    expect(result).toBe(11);
  });

  it('deve executar pelo 2 vez a função de somar ', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    service.somar(4,2);
    service.somar(4,1);

    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('deve executar pelo 2 vez a função de somar ', () => {
    const spy = spyOn(service, 'somar').and.callThrough();

    service.somar(4,2);

    expect(spy).toHaveBeenCalledWith(4,2);
  });

  it('deve subtrair corretamente dois números', () => {
    const num1 = 10;
    const num2 = 4;
    const resultadoEsperado = 6;

    const resultado = service.subtrair(num1, num2);

    expect(resultado).toBe(resultadoEsperado);
  });

  it('deve multiplicar corretamente dois números', () => {
    const num1 = 5;
    const num2 = 3;
    const resultadoEsperado = 15;

    const resultado = service.multiplicar(num1, num2);

    expect(resultado).toBe(resultadoEsperado);
  });

  it('deve dividir corretamente dois números', () => {
    const num1 = 20;
    const num2 = 4;
    const resultadoEsperado = 5;

    const resultado = service.dividir(num1, num2);

    expect(resultado).toBe(resultadoEsperado);
  });

  it('deve retornar erro ao dividir por zero', () => {
    const num1 = 10;
    const num2 = 0;

    expect(() => service.dividir(num1, num2)).toThrow(new Error('Divisão por zero'));
  });

  it('deve lançar um erro ao tentar dividir por zero', () => {
    const num1 = 10;
    const num2 = 0;

    expect(() => service.dividir(num1, num2)).toThrow(new Error('Divisão por zero'));
  });

});
