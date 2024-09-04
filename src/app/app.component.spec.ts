import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

//suite principal
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  //'it' representa o teste unitário
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    //verificação seguida de uma comparação
    //metodo que vem em seguida da comparação é chamado de matcher
    expect(app).toBeTruthy();
  });

  it(`should have the 'test-jasm-karma' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Exercicio Testes unitários');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Calculadora');
  });
});
