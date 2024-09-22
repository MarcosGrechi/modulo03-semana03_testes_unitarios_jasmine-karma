import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculadoraService } from '../services/calculadora.service';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;
  let calculadoraService: any;

  beforeEach(async () => {
    const calculadoraServiceSpy = jasmine.createSpyObj('CalculadoraService', ['somar', 'subtrair', 'multiplicar', 'dividir']);
  
    await TestBed.configureTestingModule({
      imports: [FormsModule, CalculadoraComponent], // Inclua o componente standalone diretamente
      providers: [{ provide: CalculadoraService, useValue: calculadoraServiceSpy }],
    }).compileComponents();
  
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    calculadoraService = TestBed.inject(CalculadoraService); // Injeta o serviço mockado
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve validar se 2 valores são iguais', () => {
      const valor1 = {value: true};
      const valor2 = {value: true};

      expect(valor1).toEqual(valor2);
  });

  it('deve validar se 2 valores são iguais e se os objetos comparados também são iguais', () => {
    const valor1 = {value: true};
    const valor2 = {value: true};

    expect(valor1).toBe(valor1);
  });

  it('deve somar dois números corretamente', () => {
    component.num1 = 5;
    component.num2 = 3;
    calculadoraService.somar.and.returnValue(8); // Simula a soma

    component.somar(); // Chama o método somar

    expect(component.result).toBe(8);
    expect(calculadoraService.somar).toHaveBeenCalledWith(5, 3); // Verifica se o serviço foi chamado corretamente
  });

  it('deve validar a expressão regular de cep', () => {
    const cep = "12345-567";

    expect(cep).toMatch(/^\d{5}-\d{3}$/);
  });

  it('deve validar se valor foi definido', () => {
    expect(component.num1).toBeDefined();
  });

  it('deve validar se valor não foi definido', () => {
    let nota;
    expect(nota).toBeUndefined();
  });

  it('deve validar se valor é nulo', () => {
    let notas = null;
    expect(notas).toBeNull();
  });

  it('deve validar se o valor do resultado não é nulo após somar os valores', () => {
    component.num1 = 2;
    component.num2 = 4;
  
    // Simula o retorno da soma como 6
    calculadoraService.somar.and.returnValue(6); 
  
    component.somar(); // Chama o método somar
  
    expect(component.result).not.toBeNull(); // Verifica se o resultado não é nulo
  });
  

  it('deve validar se o valor está contido dentro do array', () => {
    let frutas = ['laranja', 'maçã', 'pera'];

    expect(frutas).toContain('laranja');
  });

  it('deve validar se o valor é menor que 10', () => {
    component.num1 = 2;
    component.num2 = 4;
    
    // Simula o retorno da soma como 6
    calculadoraService.somar.and.returnValue(6); 
  
    component.somar(); // Chama o método somar
  
    expect(component.result).toBeLessThan(10); // Verifica se o resultado é menor que 10
  });
  
  it('deve validar se o valor é maior que 10', () => {
    component.num1 = 11;
    component.num2 = 14;
  
    // Simula o retorno da soma como 25
    calculadoraService.somar.and.returnValue(25); 
  
    component.somar(); // Chama o método somar
  
    expect(component.result).toBeGreaterThan(10); // Verifica se o resultado é maior que 10
  });
  
  

  it('deve executar pelo menos uma vez o evento de click da função somar', () => {
    const spy = spyOn(component, 'somar').and.callThrough(); // Espionando o método somar
  
    const button = fixture.nativeElement.querySelector('button'); // Seleciona o botão de soma
    button.click(); // Simula o clique no botão
  
    expect(spy).toHaveBeenCalled(); // Verifica se o método somar foi chamado
  });
  

  it('deve atualizar num1 e num2 quando o usuário insere valores nos campos de entrada', () => {
    // Obtenção dos elementos DOM dos campos de input
    const inputNum1: DebugElement = fixture.debugElement.query(By.css('input[placeholder="Número 1"]'));
    const inputNum2: DebugElement = fixture.debugElement.query(By.css('input[placeholder="Número 2"]'));
  
    // Simulação da entrada do usuário nos inputs
    inputNum1.nativeElement.value = '5';
    inputNum1.nativeElement.dispatchEvent(new Event('input'));
    
    inputNum2.nativeElement.value = '10';
    inputNum2.nativeElement.dispatchEvent(new Event('input'));
  
    // Detecção de mudanças após a simulação de entrada
    fixture.detectChanges();
  
    // Verificação se as variáveis num1 e num2 foram atualizadas corretamente
    expect(component.num1).toBe(5);
    expect(component.num2).toBe(10);
  });
  
  it('deve lançar um erro ao tentar dividir por zero', () => {
    spyOn(window, 'alert'); // Espiona o método alert
    component.num1 = 10;
    component.num2 = 0;
  
    component.dividir();
  
    expect(window.alert).toHaveBeenCalledWith('Não é possível dividir por zero!');
  });
  
  it('deve atualizar o resultado corretamente ao somar dois números', () => {
    // Arrange: Define os valores de num1 e num2
    component.num1 = 5;
    component.num2 = 3;
    calculadoraService.somar.and.returnValue(8); // Simula a soma
  
    // Act: Chama o método somar
    component.somar();
  
    // Assert: Verifica se o resultado foi atualizado corretamente
    expect(component.result).toBe(8);
    expect(calculadoraService.somar).toHaveBeenCalledWith(5, 3); // Verifica se o serviço foi chamado corretamente
  });
  
});
