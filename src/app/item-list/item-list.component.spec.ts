import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    // Limpa a lista de itens após cada teste
    component.items = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve adicionar um item à lista', () => {
    component.newItem = 'Item 1';
    component.addItem();
    expect(component.items.length).toBe(1);
    expect(component.items[0]).toBe('Item 1');
  });

  it('não deve adicionar um item se o campo estiver vazio', () => {
    component.addItem(); // Chamando sem definir newItem
    expect(component.items.length).toBe(0);
  });

  it('deve adicionar múltiplos itens à lista', () => {
    component.newItem = 'Item 1';
    component.addItem();
    component.newItem = 'Item 2';
    component.addItem();
    expect(component.items.length).toBe(2);
    expect(component.items).toEqual(['Item 1', 'Item 2']);
  });

});
