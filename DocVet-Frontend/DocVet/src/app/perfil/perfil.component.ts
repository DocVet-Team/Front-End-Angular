import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const API_URL = "http://localhost:3000";
let userId: string | null;

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  userId: string | null | undefined; // Variável para armazenar o ID do usuário
  userProfile: any; // Objeto para armazenar os dados do perfil do usuário

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Carregar o ID do usuário do armazenamento local
    this.userId = localStorage.getItem('userId');
    // Carregar os dados do perfil do usuário
    this.loadUserProfile(this.userId);
  }

  loadUserProfile(userId: string | null): void {
    // Verificar se o ID do usuário está presente
    if (userId) {
      // Fazer uma solicitação HTTP para obter os dados do perfil do usuário
      this.http.get(API_URL + '/users/' + userId)
        .subscribe((data: any) => {
          // Atribuir os dados do perfil do usuário à variável userProfile
          this.userProfile = data;
        }, (error) => {
          console.error('Erro ao carregar o perfil do usuário:', error);
        });
    } else {
      console.error('ID do usuário não encontrado.');
    }
  }
}