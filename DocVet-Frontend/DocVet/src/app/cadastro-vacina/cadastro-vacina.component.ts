import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-vacina',
  standalone: true,
  imports: [HttpClient,CommonModule],
  templateUrl: './cadastro-vacina.component.html',
  styleUrl: './cadastro-vacina.component.css'
})

export class RegistroVacinasComponent {
  editHabilitado: boolean = false;
  v8_v10: string = '';
  raiva: string = '';
  tosse: string = '';
  id_pet: string = '';

  constructor(private http: HttpClient) {}

  async acessarHistorico(){
    const idPet = this.id_pet;
    if (!(idPet === null || idPet === undefined)){
      const resposta = await this.http.get<any>('http://localhost:3000/vacina/' + idPet).toPromise();
      this.v8_v10 = resposta.vac_v8_v10;
      this.raiva = resposta.vac_raiva;
      this.tosse = resposta.vac_tosse;
      this.editHabilitado = true;
    }
  }

  editVacina(habilitado: boolean){
    this.editHabilitado = habilitado;
  }

  async saveVacina(){
    if (this.editHabilitado){
      await this.http.put<any>('http://localhost:3000/vacina/' + this.id_pet, {
        vac_v8_v10: this.v8_v10,
        vac_raiva: this.raiva,
        vac_tosse: this.tosse
      }).toPromise();
      alert('Confirmado save!');
      this.editHabilitado = false;
    } else {
      alert('Nenhum campo alterado!');
    }
  }
}