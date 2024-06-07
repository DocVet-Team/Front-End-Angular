import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroDonoPetComponent } from './cadastro-dono-de-pet/cadastro-dono-de-pet.component';
import { CadastroVeterinarioComponent } from './cadastro-veterinario/cadastro-veterinario.component';
import { PerfilComponent } from './perfil/perfil.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastroDonoPet', component: CadastroDonoPetComponent }, // Adicione seu componente de cadastro de dono de pet
  { path: 'cadastroVeterinario', component: CadastroVeterinarioComponent }, // Adicione seu componente de cadastro de veterinário
  { path: 'perfil', component: PerfilComponent }, // Adicione seu componente de perfil
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];