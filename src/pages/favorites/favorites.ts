import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { Quote } from '../../app/data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: "page-favorites",
  templateUrl: "favorites.html"
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(
    private quotesService: QuotesService,
    private modalCtr: ModalController,
    private settServ: SettingsService
  ) {}

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavorites();
    // console.log("Fav: " + JSON.stringify(this.quotes))
  }

  onViewFavorite(quote: Quote) {
    const modal = this.modalCtr.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFavorite(quote);
      }
    });
  }

  onRemoveFavorite(quote: Quote) {
    this.quotesService.removeQuote(quote);
    this.quotes = this.quotesService.getFavorites();
  }

  getBackground(){
    return this.settServ.isToggle() ? 'altBackground' : 'quoteBackground'
  }
  
  isToggle(){
    return this.settServ.isToggle()
  }

}
