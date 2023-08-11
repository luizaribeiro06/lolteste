import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {Tab1Page} from '../app/tab1/tab1.page';
import {Tab2Page} from '../app/tab2/tab2.page';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  rootPage: any = Tab1Page;
  public appPages = [
    // title: 'Home', url: '/folder/inbox', icon: 'mail' 
    { title: 'Home', component: Tab1Page},
    { title: 'Descricao', component: Tab2Page},
    { title: 'App Transporte', url: '/transporte'},
    { title: 'Lol', url: '/lol'},
    { title: 'Lol', url: '/lol'},
];

  constructor() {}

}