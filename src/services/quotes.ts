import { Quote } from "../app/data/quote.interface";

export class QuotesService {

  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorite(quote: Quote){
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes)
  }

  removeQuote(selected: Quote){
    const position = this.favoriteQuotes.findIndex((ele: Quote) => {
      return ele.id == selected.id
    })
    this.favoriteQuotes.splice(position, 1)
  }

  getFavorites(){
    return this.favoriteQuotes.slice()
  }

  isFavorite(quote: Quote){
    return this.favoriteQuotes.find((quoteEle: Quote) =>{
      return quoteEle.id == quote.id
    })
  }


  

}