import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-cadastro-dono-de-pet',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cadastro-dono-de-pet.component.html',
  styleUrl: './cadastro-dono-de-pet.component.css'
})
export class CadastroDonoPetComponent {
  formData: any = {};
  showErrors: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (!this.validateForm()) {
      this.showErrors = true;
      return;
    }

    this.http.post<any>('http://localhost:3000/donoPet/', this.formData)
      .subscribe(
        response => {
          alert('Cadastro realizado com sucesso!');
          this.router.connect(['/login']);
        },
        error => {
          console.error('Ocorreu um erro durante o cadastro. Tente novamente mais tarde.');
        }
      );
  }

  validateForm(): boolean {
    // Adicione suas validações de formulário aqui
    return !!this.formData.nome && !!this.formData.cpf && !!this.formData.telefone && !!this.formData.email && !!this.formData.senha && !!this.formData.confsenha;
  }
}