import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab tabIcon="star" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="book" [root]="tab2"></ion-tab>
    </ion-tabs>`
})
export class TabsPage {

  tab1:any;
  tab2: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = FavoritesPage;
    this.tab2 = LibraryPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
