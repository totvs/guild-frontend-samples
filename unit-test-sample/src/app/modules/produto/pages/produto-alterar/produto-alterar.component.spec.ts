import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoAlterarComponent } from './produto-alterar.component';

xdescribe('produto-alterar.component.spec | ProdutoAlterarComponent', () => {

  let component: ProdutoAlterarComponent;
  let fixture: ComponentFixture<ProdutoAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoAlterarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
