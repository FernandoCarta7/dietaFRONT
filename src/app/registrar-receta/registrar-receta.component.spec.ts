import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarRecetaComponent } from './registrar-receta.component';

describe('RegistrarRecetaComponent', () => {
  let component: RegistrarRecetaComponent;
  let fixture: ComponentFixture<RegistrarRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarRecetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
