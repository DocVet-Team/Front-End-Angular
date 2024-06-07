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


// <script
// src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
// integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
// crossorigin="anonymous"
// ></script>

// <script>
//   let nomeVet = document.getElementById('nome');
//   let fotoVet = document.getElementById('fotoVet');
//   let espec1 = document.getElementById('especialidade1');
//   let espec2 = document.getElementById('especialidade2');
//   let convenios = document.getElementById('areaConvenios');
//   let valor = document.getElementById('valor');
//   const veterinariosArea = document.getElementById('veterinariosArea');

//   const API_URL = 'http://localhost:3000/veterinario';

//   async function pesquisarFiltro(){
//       const checkEspecialidade = document.querySelectorAll('input[name="especialidade"]:checked')
//       const checkTipoAnimal = document.querySelectorAll('input[name="tipo_animal"]:checked')
//       const checkPorte = document.querySelectorAll('input[name="porte"]:checked')
//       const checkConvenio = document.querySelectorAll('input[name="convenio"]:checked');
//       const checkValor = document.querySelectorAll('input[name="valor"]:checked');
//       const checkEstado = document.getElementById('estado');
//       const checkCidade = document.getElementById('cidade');


//       let especialidades = Array.from(checkEspecialidade).map(checkbox => checkbox.value);
//       let tipo_animal = Array.from(checkTipoAnimal).map(checkbox => checkbox.value);
//       let porte = Array.from(checkPorte).map(checkbox => checkbox.value);
//       let convenio = Array.from(checkConvenio).map(checkbox => checkbox.value);
//       let valor = Array.from(checkValor).map(checkbox => checkbox.value);
//       let estado = checkEstado.value;
//       let cidade = checkCidade.value;

//       // console.log(especialidades);
//       // console.log(tipo_animal);
//       // console.log(porte);
//       // console.log(convenio);
//       // console.log(valor);
//       // console.log(estado);
//       // console.log(cidade);

//       const queryEspecialidades = especialidades.map(item => "especialidade=" + item).join('&');
//       const queryTipoAnimal = tipo_animal.map(item => "tipo_animal=" + item).join('&');
//       const queryPorte = porte.map(item => "porte=" + item).join('&');
//       const queryConvenio = convenio.map(item => "convenio=" + item).join('&');
//       const queryValor = valor.map(item => "valor=" + item).join('&');

//       // console.log(queryEspecialidades);
//       // console.log(queryTipoAnimal);
//       // console.log(queryPorte);
//       // console.log(queryConvenio);
//       // console.log(queryValor);

//       const teste = [];
//       if (queryEspecialidades ? teste.push(queryEspecialidades) : ``);
//       if (queryTipoAnimal ? teste.push(queryTipoAnimal) : ``);
//       if (queryPorte ? teste.push(queryPorte) : ``);
//       if (queryConvenio ? teste.push(queryConvenio): ``);
//       if (queryValor ? teste.push(queryValor) : ``);
//       if (estado ? teste.push(`estadoatendimento=` + estado) : ``);
//       if (cidade ? teste.push(`cidadeatendimento=` + cidade) : ``);
//       const query = teste.join('&');
//       console.log(query);

//       const resposta = await fetch
//       (
//           API_URL + '/pesquisa' + '?'+ query
//       );
//       const veterinarios = await resposta.json();
//       if (!(veterinarios === null)){
//           getVeterinarios(veterinarios);
//       }else{
//           veterinariosArea.innerHTML =
//           `
//           <div class="imagem-not_found mt-4">
//               <div class="imagemCenter">
//                   <img class="not_found" src="/style/img/NotFound.png" alt="Não foram encontrados resultados">
//               </div>
//               </div>
//           <div class="texto-not_found mt-4">
//               <h1 class="not_found">OPS!</h1>
//               <br>
//               <h4 class="not_found">Não foram encontrados resultados para sua busca</h4>
//           </div>
//           `;
//       }
//   }

//   async function pesquisarNome(){
//       const nome = document.getElementById('nome').value;
//       const resposta = await fetch(API_URL + '/nome/' + nome);
//       const veterinarios = await resposta.json();
//       if (veterinarios === null){
//           veterinariosArea.innerHTML =
//           `
//           <div class="imagem-not_found mt-4">
//               <div class="imagemCenter">
//                   <img class="not_found" src="/style/img/NotFound.png" alt="Não foram encontrados resultados">
//               </div>
//               </div>
//           <div class="texto-not_found mt-4">
//               <h1 class="not_found">OPS!</h1>
//               <br>
//               <h4 class="not_found">Não foram encontrados resultados para sua busca</h4>
//           </div>
//           `;
//       }else{
//           getVeterinarios(veterinarios);
//       }
//   }

//   window.onload = async function(){
//       const resposta = await fetch(API_URL + '/')
//       const veterinarios = await resposta.json();

//       getVeterinarios(veterinarios);
//   }

//   async function getAll(){
//       const resposta = await fetch(API_URL + '/');
//       const veterinarios = await resposta.json();
//       getVeterinarios(veterinarios);
//   }

//   async function getVeterinarios(vet){
//       const veterinarios = vet;
//       //console.log(typeof veterinarios);
//       //console.log(veterinarios.length);

//       veterinariosArea.innerHTML = ``;
//       let htmlCardGroup = ``;
//       let contagemVeterinarios = 0;
//       let divisoes = 0;

//       if (!(veterinarios.length === 1)){
//           for (k of veterinarios){
//           contagemVeterinarios++
//           }
//       }else{
//           contagemVeterinarios = 1;
//       }

//       divisoes = Math.ceil(contagemVeterinarios/3);

//       for(let i = 0; i< divisoes; i++){
//           htmlCardGroup += `
//               <div id="card${i}" class="card-group">
//               </div>
//               <br>
//           `
//       }

//       veterinariosArea.innerHTML += htmlCardGroup;


//       //===================Quantidade de convenios e especialidades============//

//       //console.log("Veterinarios Length: " + veterinarios.length);
//       let posicaoVet = 0;
//       let html = ``;
//       for (let cardGroup = 0; cardGroup<divisoes; cardGroup++){
//           let contador = 0;
//           while (!(contador === 3)){
//               let htmlEspecialidade = ``;
//               let htmlConvenio = ``;
//               let htmlFoto = ``;

//               //console.log("Posicao Vet: " + posicaoVet);
//               if (posicaoVet >= veterinarios.length){
//                   html +=
//                   `
//                       <div class="card placeholder-card">
//                           <div class="card-header">
//                               <div class="card-body">
//                               </div>
//                           </div>
//                       </div>
//                   `;
//                   posicaoVet++
//                   contador++;
//               }else{
//                   //console.log("Especialidade: " + veterinarios[posicaoVet].nome);
//                   //console.log("Especialidade: " + veterinarios[posicaoVet].especialidade);
//                   let especialidades = veterinarios[posicaoVet].especialidade.split("/");
//                   let convenios = veterinarios[posicaoVet].convenio;
//                   let fotoVet = veterinarios[posicaoVet].foto;




//                   if (!(convenios === null)){
//                       convenios = veterinarios[posicaoVet].convenio.split("/");
//                       htmlConvenio += `<h5>Convênios</h5>`
//                       for (convenio of convenios){
//                           if (convenio === 'PetHealth'){
//                               htmlConvenio +=
//                               `
//                               <img src="/style/img/conveniosLogo/PetHealth.png" width="30px" class="convenioCirculo">
//                               `
//                           }
//                           if (convenio === 'PetLove'){
//                               htmlConvenio +=
//                               `
//                               <img src="/style/img/conveniosLogo/PetLove.png" width="30px" class="convenioCirculo">
//                               `
//                           }

//                           if (convenio === 'Plamev'){
//                               htmlConvenio +=
//                               `
//                               <img src="/style/img/conveniosLogo/Plamev.png" width="30px" class="convenioCirculo">
//                               `
//                           }
//                       }
//                   }else{
//                       htmlConvenio += `
//                       <h5>Não atende convênio</h5>
//                       <img style="visibility: hidden;" src="/style/img/conveniosLogo/Plamev.png" width="30px" class="convenioCirculo">
//                       `
//                   }




//                   if (especialidades.length === 1){
//                       htmlEspecialidade += `
//                           <h4>${especialidades[0]}</h4>
//                           <h4 style="visibility: hidden;">Especialidade</h4>
//                       `;
//                   }else{
//                       if(especialidades.length === 2){
//                           for (especialidade of especialidades){
//                               htmlEspecialidade +=
//                               `
//                                   <h4>${especialidade}</h4>
//                               `;
//                           }
//                       }else{
//                           let contagemEspecialidades = especialidades.length;
//                           htmlEspecialidade +=
//                           `
//                               <h4>${especialidade}</h4>
//                               <h4 style="font-size: 16.95px; margin-bottom: 16px;">Mais ${contagemEspecialidades-1} especialidades</h4>
//                           `
//                       }


//                   }


//                   if (!(fotoVet === null)){
//                       htmlFoto = `
//                           <img src="${veterinarios[posicaoVet].foto}" width="200px" class="img-fluid img-thumbnail mt-3 imagemDoutores imagem">
//                       `
//                   }else{
//                       htmlFoto = `
//                       <img src="/style/img/FotoPerfilVazia.png" width="200px" class="img-fluid img-thumbnail mt-3 imagemDoutores imagem">
//                       `
//                   }


//                   html += `

//                   <div class="card align-items-center">
//                       <div class="pt-3 card-header justify-content-around text-center">
                        
//                           <h4>${veterinarios[posicaoVet].nome}</h4>
                      
//                           ` + htmlFoto + `

//                           <div class="card-body">
                            
//                               ` + htmlEspecialidade + `
//                               <br>
//                               <div">
//                                   ` + htmlConvenio + `
//                               </div>
//                               <br>
                              
//                               <h5>Valor da Consulta</h5>
//                               <h5>R$ ${veterinarios[posicaoVet].valor}</h5>
//                               <br>
//                               <div class="text-center">
//                                   <i class="bi bi-star-fill"></i>
//                                   <i class="bi bi-star-fill"></i>
//                                   <i class="bi bi-star-fill"></i>
//                                   <i class="bi bi-star-fill"></i>
//                                   <i class="bi bi-star-fill"></i>
//                               </div>
//                           </div>
//                       </div>
//                   </div>

//                   `;

//                   posicaoVet++;
//                   contador++;
//               }
//           const card = document.getElementById(`card${cardGroup}`);
//           card.innerHTML += html;
//           html = ``;
//       }
//   }




//   }

// </script>