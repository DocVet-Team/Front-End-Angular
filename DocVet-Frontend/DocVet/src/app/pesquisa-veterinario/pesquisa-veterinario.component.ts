import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { VeterinarioService } from '../services/veterinarios.service';
import { Veterinario } from '../models/veterinario.model';
import { VetContainerListagemComponent } from '../components/vet-container-listagem/vet-container-listagem.component';
import { EspecialidadeService } from '../services/especialidades.service';
import { Especialidade } from '../models/especialidade.model';
import { TipoAnimal } from '../models/tipo-animal.model';
import { TipoAnimalService } from '../services/tipo-animal.service';
import { Porte } from '../models/porte-animal.model';
import { Convenio } from '../models/convenio.model';
import { ConvenioService } from '../services/convenio.service';

@Component({
  selector: 'app-pesquisa-veterinario',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink, VetContainerListagemComponent],
  templateUrl: './pesquisa-veterinario.component.html',
  styleUrl: './pesquisa-veterinario.component.css'
})

export class PesquisaVeterinarioComponent {

  constructor(private veterinarioService: VeterinarioService, private especialidadeService: EspecialidadeService, private tipoAnimalService: TipoAnimalService, private convenioService: ConvenioService) {}

  veterinarios: Veterinario[] = [];
  veterinariosFiltrados: Veterinario[] = [];
  especialidades: Especialidade[] = [];
  tiposAnimal: TipoAnimal[] = [];
  convenios: Convenio[] = [];

  portes: Porte[] = [
    new Porte(0, "Pequeno"),
    new Porte(1, "Medio"),
    new Porte(2, "Grande")
  ];

  especialidadesSelecionadas: Especialidade[] = [];
  portesSelecionados: Porte[] = [];
  tipoAnimalSelecionado: TipoAnimal[] = [];
  convenioSelecionado: Convenio[] = [];


  nomePesquisado: string = '';
  valorPesquisado: number = 0;

  ngOnInit(): void{
    this.consultarTodos();
    this.consultarEspecialidades();
    this.consultarTipoAnimal();
    this.consultarConvenios();
  }

  adicionarFiltros(){
    this.adicionarEspecialidadesSelecionadas();
    this.adicionarTipoAnimalSelecionado();
    this.adicionarConveniosSelecionados();

    // this.adicionarPortesSelecionados();
    this.filtrarVeterinarios();
  }

  filtrarVeterinarios() {
    this.veterinariosFiltrados = this.veterinarios.filter(veterinario => {
      const atendeEspecialidades = this.especialidadesSelecionadas.every(especialidade =>
        veterinario.especialidades?.some(veterinarioEspecialidade => veterinarioEspecialidade.id === especialidade.id)
      );

      const atendeTipoAnimal = this.tipoAnimalSelecionado.length === 0 || this.tipoAnimalSelecionado.every(tipoAnimal =>
        veterinario.tipoAnimal?.some(veterinarioTipoAnimal => veterinarioTipoAnimal.id === tipoAnimal.id)
      );

      // const atendePortes = this.portesSelecionados.length === 0 || this.portesSelecionados.some(porte =>
      //   veterinario.portes?.some(veterinarioPorte => veterinarioPorte.valor === porte.valor)
      // );

      const atendeConvenios = this.convenioSelecionado.length === 0 || this.convenioSelecionado.every(convenio =>
        veterinario.convenios?.some(veterinarioConvenio => veterinarioConvenio.id === convenio.id)
      );

      let atendeValorPesquisado = true;

      if (this.valorPesquisado > 0 || this.valorPesquisado != null) {
        atendeValorPesquisado = veterinario.valor <= this.valorPesquisado;
      }

      return atendeEspecialidades && atendeTipoAnimal && atendeConvenios && atendeValorPesquisado // /*&& atendePortes*/;
    });
  }

  adicionarTipoAnimalSelecionado() {
    this.tipoAnimalSelecionado = [];
    this.tiposAnimal.forEach(tipoAnimal => {
      const checkbox = document.getElementById('tipoAnimalCheck' + tipoAnimal.id) as HTMLInputElement;
      if (checkbox.checked && checkbox.checked) {
        this.tipoAnimalSelecionado.push(tipoAnimal);
      }
    });
  }

  adicionarConveniosSelecionados() {
    this.convenioSelecionado = [];
    this.convenios.forEach(convenio => {
      const checkbox = document.getElementById('convenioCheck' + convenio.id) as HTMLInputElement;
      if (checkbox && checkbox.checked) {
        this.convenioSelecionado.push(convenio);
      }
    });
  }


  adicionarEspecialidadesSelecionadas() {
    this.especialidadesSelecionadas = [];
    this.especialidades.forEach(especialidade => {
      const checkbox = document.getElementById('especialidadeCheck' + especialidade.id) as HTMLInputElement;
      if (checkbox && checkbox.checked) {
        this.especialidadesSelecionadas.push(especialidade);
      }
    });
  }






  adicionarPortesSelecionados() {
    this.portesSelecionados = [];
    this.portes.forEach(porte => {
      const checkbox = document.getElementById('porteCheck' + porte.valor) as HTMLInputElement;
      if (checkbox.checked && checkbox.checked) {
        this.portesSelecionados.push(porte);
        }
      });
  }






















  consultarEspecialidades(){
    this.especialidadeService.consultar().toPromise().then((res?: Especialidade[]) => {
      this.especialidades = res!;
    })
  }

  consultarConvenios(){
    this.convenioService.getAll().toPromise().then((res?: Convenio[]) => {
      this.convenios = res!;
    })
  }

  consultarTipoAnimal(){
    this.tipoAnimalService.getAll().toPromise().then((res?: TipoAnimal[]) => {
      this.tiposAnimal = res!;
    })
  }
  consultarTodos(){
    this.veterinarioService.consultar().toPromise().then((res?: Veterinario[]) => {
      this.veterinarios = res!;
      this.veterinariosFiltrados = res!;
    })
  }

  consultarNome(){
    this.veterinarioService.consultarNome(this.nomePesquisado).toPromise().then((res?: Veterinario[]) => {
      this.veterinarios = res!;
      this.veterinariosFiltrados = res!;
    })
  }

  onPesquisaClick(){
    if (this.nomePesquisado == ''){
      this.consultarTodos();
    }else{
      this.consultarNome();
    }
  }



}
