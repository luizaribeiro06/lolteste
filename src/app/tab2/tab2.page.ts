import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { ISerie } from '../model/ISerie';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router) {}

  listaSeries: ISerie[] = [
    {
      nome: 'Peaky Blinders',
      data: '12/09/2013 (BR)',
      classificacao: 9,
      foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg',
      extra: ['Drama', 'Crime'],
      pagina: '/pb',
      favorito: false
    }
  ];


  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}
