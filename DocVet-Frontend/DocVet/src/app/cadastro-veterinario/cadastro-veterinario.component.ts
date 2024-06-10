import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Veterinario } from '../models/veterinario.model';
import { VeterinarioService } from '../services/veterinarios.service';

@Component({
  selector: 'app-cadastro-veterinario',
  templateUrl: './cadastro-veterinario.component.html',
  styleUrls: ['./cadastro-veterinario.component.css']
})
export class CadastroVeterinarioComponent implements OnInit {

  lista: Veterinario[] = [];
  listaSel: Veterinario[] | undefined;
  obj: Veterinario = new Veterinario();
  mens = '';

  constructor(private api: VeterinarioService) {}

  ngOnInit(): void {
    this.consultar();
    this.consultarSel();
  }

  consultarSel() {
    this.api.consultar()
      .toPromise()
      .then((res: any) => {
        this.listaSel = res;
      });
  }

  consultar() {
    this.api.consultar()
      .toPromise()
      .then((res: any) => {
        this.lista = res;
      });
  }

  adicionar() {
    this.api.adicionar(this.obj)
      .toPromise()
      .then((veterinario: Veterinario | any) => {
        this.mens = `${veterinario.nome} foi adicionado(a) com sucesso!`;
      });
  }

  excluir() {
    this.api.excluir(this.obj.id)
      .toPromise()
      .then(() => {
        this.mens = 'Pessoa excluída com sucesso!';
        this.consultar();
      });
  }

  alterar() {
    this.api.alterar(this.obj.id, this.obj);
  }
}
