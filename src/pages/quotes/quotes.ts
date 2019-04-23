import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Quote } from '../../app/data/quote.interface';
import { QuotesService } from '../../services/quotes';


@IonicPage()
@Component({
  selector: "page-quotes",
  templateUrl: "quotes.html"
})
export class QuotesPage implements OnInit {
  quotesGroup: { category: string; quotes: Quote[]; icon: string };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtr: AlertController,
    private quotesService: QuotesService
  ) {}

  // ionViewDidLoad() {
  //   this.quotesGroup = this.navParams.data;
  //   console.log(this.quotesGroup);
  // }

  ngOnInit() {
    this.quotesGroup = this.navParams.data;
  }

  addFavorite(selectedQuote: Quote) {
    const alert = this.alertCtr.create({
      title: "Add Quote",
      message: "Are you Sure You want Add this Quote?",
      buttons: [
        {
          text: "Yes, do it",
          handler: () => {
            this.quotesService.addQuoteToFavorite(selectedQuote);
          }
        },
        {
          text: "No, come back",
          role: "cancel",
          handler: () => {
            console.log("Abort add Quote");
          }
        }
      ]
    });
    alert.present();
  }

  removeFavorite(quote){
    this.quotesService.removeQuote(quote)
  }

  isFavorite(quote: Quote){
    return this.quotesService.isFavorite(quote)
  }

}
