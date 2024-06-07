import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formData: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.formData)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Credenciais inválidas. Por favor, tente novamente.");
      }
    })
    .then(data => {
      if (data.userId) {
        localStorage.setItem("userId", data.userId);
        alert("Bem vindo ao DocVet!");
        this.router.connect(['/perfil']);
      } else {
        alert("Credenciais inválidas. Por favor, tente novamente.");
      }
    })
    .catch(error => {
      console.error("Erro ao fazer login:", error);
    });
  }
}
