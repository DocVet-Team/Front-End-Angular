import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetContainerListagemComponent } from './vet-container-listagem.component';

describe('VetContainerListagemComponent', () => {
  let component: VetContainerListagemComponent;
  let fixture: ComponentFixture<VetContainerListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VetContainerListagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VetContainerListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
