import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { VeterinarioService } from '../services/veterinarios.service';
import { Veterinario } from '../models/veterinario.model';
import { VetContainerListagemComponent } from '../components/vet-container-listagem/vet-container-listagem.component';
@Component({
  selector: 'app-pesquisa-veterinario',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink, VetContainerListagemComponent],
  templateUrl: './pesquisa-veterinario.component.html',
  styleUrl: './pesquisa-veterinario.component.css'
})
export class PesquisaVeterinarioComponent {

  constructor(private veterinarioService: VeterinarioService) {}

  veterinarios: Veterinario[] = [];

  ngOnInit(): void{
    this.consultarTodos();
  }

  consultarTodos(){
    this.veterinarioService.consultar().toPromise().then((res?: Veterinario[]) => {
      this.veterinarios = res!;
      console.log(this.veterinarios);
      // this.veterinarios.forEach(veterinario => {
      //   console.log(veterinario.especialidades);
      // });
    })
  }

}
