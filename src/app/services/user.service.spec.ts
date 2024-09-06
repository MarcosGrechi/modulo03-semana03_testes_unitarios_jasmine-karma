import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeAll(() => {
    // Configuração que deve ser feita apenas uma vez
    console.log('Iniciando os testes do UserService...');
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    // Limpa o estado após cada teste
    service.clearUsers();
  });

  afterAll(() => {
    // Limpeza que deve ser feita apenas uma vez
    console.log('Todos os testes do UserService foram concluídos.');
  });

  it('deve adicionar um usuário', () => {
    service.addUser('Alice');
    expect(service.getUsers()).toContain('Alice');
  });
  
  it('deve adicionar múltiplos usuários', () => {
    service.addUser('Bob');
    service.addUser('Charlie');
    expect(service.getUsers()).toEqual(['Bob', 'Charlie']);
  });

  it('deve retornar uma lista vazia se nenhum usuário foi adicionado', () => {
    expect(service.getUsers()).toEqual([]);
  });
});
