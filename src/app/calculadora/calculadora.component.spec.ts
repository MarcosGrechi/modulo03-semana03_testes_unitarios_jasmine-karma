import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
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
    component.num1 = 2;
    component.num2 = 4;
    component.calculate();

    expect(component.result).toBe(6);
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
    component.calculate();

    expect(component.result).not.toBeNull();
  });

  it('deve validar se o valor está contido dentro do array', () => {
    let frutas = ['laranja', 'maçã', 'pera'];

    expect(frutas).toContain('laranja');
  });

  it('deve validar se o valor é menor que 10', () => {
    component.num1 = 2;
    component.num2 = 4;
    component.calculate();

    expect(component.result).toBeLessThan(10);
  });

  it('deve validar se o valor é maior que 10', () => {
    component.num1 = 2;
    component.num2 = 14;
    component.calculate();

    expect(component.result).toBeGreaterThan(10);
  });

  it('deve executar pelo menos uma vez o evento de click da função somar ', () => {
    const spy = spyOn(component, 'calculate').and.callThrough();

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(spy).toHaveBeenCalled();
  });


});
