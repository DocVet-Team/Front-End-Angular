import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pesquisa-veterinario',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './pesquisa-veterinario.component.html',
  styleUrl: './pesquisa-veterinario.component.css'
})
export class PesquisaVeterinarioComponent {

}
