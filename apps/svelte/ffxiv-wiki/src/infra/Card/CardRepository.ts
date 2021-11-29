import Card from '../../domains/Card/Card';
import type { ICardRepository } from '../../domains/Card/ICardRepository';
import { TripleTriadApi } from '../../services/TripleTriadApi';

export class CardRepository implements ICardRepository{
  tripleTriadApi: TripleTriadApi;

  constructor() {
    this.tripleTriadApi = new TripleTriadApi();
  }

  async getCardsList (): Promise<Card[]>{
    const tripleTriadApi = new TripleTriadApi();
    const response = await tripleTriadApi.getCardsList();
    return this.mapResponseCardsList(response.results);
  }

  public toggleCardOwnership = (cards: Card[], cardId: number): Card[] => {
    return [...cards.map( card => {
      if (card.id === cardId){
        card.toggleOwned();
      };
  
      return card
    })];
  }

  public readOwnedCards = (cards: Card[]): Card[] => {
    return cards.filter(card => card.owned);
  }

  private mapResponseCard = (cardResponse: any): Card => {
    return new Card({
      id: cardResponse.id,
      name: cardResponse.name,
      stars: cardResponse.stars,
      description: cardResponse.description,
      iconUrl: cardResponse.icon,
      image: cardResponse.image,
      owned: false,
    })
  }
  
  private mapResponseCardsList = (responseCardsList: Object[]): Card[] => {
    return responseCardsList.map( card => this.mapResponseCard(card))
  }
}