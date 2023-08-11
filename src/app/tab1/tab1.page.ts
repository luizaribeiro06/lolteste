import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(public router: Router) {}

  
  listaFilmes: IFilme[] = [
    {
      nome: 'Robôs',
      data: '10/08/2023',
      classificacao: 8,
      foto: 'https://www.techenet.com/wp-content/uploads/2023/08/Samsung-Inteligencia-artificial.jpg',
      extra: [ 'IA', 'Samsung' ],
      pagina: '/robos',
      favorito: false
    },

  ];

  ngOnInit(){
    
  }

  onClick(){

  }
 

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}
