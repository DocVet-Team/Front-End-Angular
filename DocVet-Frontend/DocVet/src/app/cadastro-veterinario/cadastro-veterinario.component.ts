import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { EspecialidadeService } from '../services/especialidades.service';

@Component({
  selector: 'app-cadastro-veterinario',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule, MessagesModule, InputTextModule],
  templateUrl: './cadastro-veterinario.component.html',
  styleUrls: ['./cadastro-veterinario.component.css']
})
export class CadastroVeterinarioComponent implements OnInit {
  formulario!: FormGroup;
  especialidades: any[] = [];
  constructor(private http: HttpClient, private fb: FormBuilder,private especialidadeService: EspecialidadeService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      crmv: ['', [Validators.required, Validators.minLength(11)]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      telefone: ['', [Validators.required, Validators.minLength(11)]],
      especialidade: ['', Validators.required],
      cidade: [''],
      estado: ['', Validators.required],
      tipo_animal: this.fb.array([]),
      porte: this.fb.array([]),
      convenio: this.fb.array([]),
      valor: [''],
      foto: [''],
      senha: ['', Validators.required],
      confsenha: ['', Validators.required]
    });

    this.carregarEspecialidades();
  }
  onCheckboxChange(e: Event, controlName: string) {
    const target = e.target as HTMLInputElement;
    if (this.formulario && target) {
      const checkArray = this.formulario.get(controlName) as FormArray;
      if (checkArray) {
        if (target.checked) {
          checkArray.push(this.fb.control(target.value));
        } else {
          let i: number = 0;
          checkArray.controls.forEach((item: any) => {
            if (item.value === target.value) {
              checkArray.removeAt(i);
              return;
            }
            i++;
          });
        }
      }
    }
  }

  checkPasswords(group: FormGroup) {
    const passControl = group.get('senha');
    const confirmPassControl = group.get('confsenha');

    if (passControl && confirmPassControl) {
      const pass = passControl.value;
      const confirmPass = confirmPassControl.value;
      return pass === confirmPass ? null : { notSame: true };
    }

    return null;
  }

  submitForm(): void {
    if (this.formulario.valid) {
      // Faça a solicitação para a sua API usando HttpClient
      this.http.post('http://localhost:8080/api/v1/veterinarios/', this.formulario.value)
        .subscribe(
          response => {
            // Verifique se a resposta é um objeto e se possui a propriedade 'status'
            if (!response) {
              // O cadastro foi realizado com sucesso
              alert("Cadastro realizado com sucesso!");
            } else {
              // Ocorreu um erro durante o cadastro
              alert("Ocorreu um erro durante o cadastro. Tente novamente mais tarde.");
            }
          },
          error => {
            // Ocorreu um erro de conexão com a API ou erro de parse
            alert("Ocorreu um erro durante a comunicação com a API. Verifique sua conexão de internet e tente novamente.");
          }
        );
    } else {
      // Formulário inválido
      alert("Por favor, preencha todos os campos corretamente.");
    }
  }
  
  
  
  nameValidate(): void {
    const nomeControl = this.formulario.get('nome');
    if (nomeControl) {
      // Lógica de validação do nome
      if (nomeControl.value.length < 3) {
        // Exibir mensagem de erro ou realizar outra ação
      } else {
        // Nome válido, realizar outra ação se necessário
      }
    }
  }

  carregarEspecialidades(): void {
    this.especialidadeService.consultar()
      .subscribe(especialidades => {
        this.especialidades = especialidades;
      });
  }
 
}
