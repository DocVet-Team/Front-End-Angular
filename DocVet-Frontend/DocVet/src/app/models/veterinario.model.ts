import { Especialidade } from "./especialidade.model";

export class Veterinario {
  id: number = 0;
  nome: string = "";
  cpf: string = '';
  email: string = '';
  foto: string = '';
  senha: string = '';
  valor: number = 0;
  especialidades: Especialidade[] = [];

}
