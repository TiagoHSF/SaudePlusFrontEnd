import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSaudeComponent } from './inicio-saude.component';

describe('InicioSaudeComponent', () => {
  let component: InicioSaudeComponent;
  let fixture: ComponentFixture<InicioSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSaudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
