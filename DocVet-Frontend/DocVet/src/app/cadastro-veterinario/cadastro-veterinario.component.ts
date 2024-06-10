import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-cadastro-veterinario',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule, MessagesModule],
  templateUrl: './cadastro-veterinario.component.html',
  styleUrl: './cadastro-veterinario.component.css'
})
export class CadastroVeterinarioComponent implements OnInit{

  lista: Veterinario[] = [];
  listaSel: Veterinario[] | undefined;
  obj: Veterinario = new Veterinario();
  mens = '';

  constructor(private api: VeterinarioService){}


  ngOnInit(): void {
    this.consultar();
    this.consultarSel();
  }

  consultarSel() {
    this.api.consultar()
    .toPromise()
    .then
    (res => {
      this.listaSel = res;
    });
  }

  consultar() {
    this.api.consultar()
    .toPromise()
    .then
    ((res: any) => {
      this.lista = res;
    });
  }

  adicionar(){
    this.api.adicionar(this.obj)
    .toPromise()
    .then((veterinario: Veterinario |any) => {
      this.mens = veterinario.nome + "foi adicionado(a) com sucesso!";
    });
  }

  excluir(){
    this.api.excluir(this.obj.id)
    .toPromise()
    .then(() => {
      this.mens = "Pessoa excluída com sucesso!";
      this.consultar();
    })
  }

  alterar(){
    this.api.alterar(this.obj, this.obj)
  }
}
