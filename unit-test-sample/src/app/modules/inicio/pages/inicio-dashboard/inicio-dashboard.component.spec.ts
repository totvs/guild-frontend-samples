import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioDashboardComponent } from './inicio-dashboard.component';

describe('InicioComponent', () => {

  let component: InicioDashboardComponent;
  let fixture: ComponentFixture<InicioDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioDashboardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
