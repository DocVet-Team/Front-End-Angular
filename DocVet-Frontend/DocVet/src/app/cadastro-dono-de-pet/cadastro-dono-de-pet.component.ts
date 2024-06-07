import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-dono-de-pet',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './cadastro-dono-de-pet.component.html',
  styleUrl: './cadastro-dono-de-pet.component.css'
})
export class CadastroDonoDePetComponent {

}
