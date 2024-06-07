import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-veterinario',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cadastro-veterinario.component.html',
  styleUrl: './cadastro-veterinario.component.css'
})
export class CadastroVeterinarioComponent {

  formData = {
    nome: '',
    especialidade: '',
    cidade: '',
    estado: '',
    valor: 0,
    foto: '',
    tipo_animal: [],
    porte: [],
    convenio: []
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    // Faça a solicitação para a sua API usando HttpClient
    this.http.post<any>('http://localhost:3000/veterinario', this.formData)
      .subscribe(
        response => {
          // Verifique o status da resposta da API
          if (response.ok) {
            // O cadastro foi realizado com sucesso
            alert("Cadastro realizado com sucesso!");
          } else {
            // Ocorreu um erro durante o cadastro
            alert("Ocorreu um erro durante o cadastro. Tente novamente mais tarde.");
          }
        },
        error => {
          // Ocorreu um erro de conexão com a API
          alert("Ocorreu um erro de conexão com a API. Verifique sua conexão de internet e tente novamente.");
        }
      );
  }
}