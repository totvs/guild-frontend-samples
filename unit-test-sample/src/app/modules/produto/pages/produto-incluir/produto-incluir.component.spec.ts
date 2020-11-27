import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoIncluirComponent } from './produto-incluir.component';

xdescribe('produto-incluir.component.spec | ProdutoIncluirComponent', () => {

  let component: ProdutoIncluirComponent;
  let fixture: ComponentFixture<ProdutoIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoIncluirComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
