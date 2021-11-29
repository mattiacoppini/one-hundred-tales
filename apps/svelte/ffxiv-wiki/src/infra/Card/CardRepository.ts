import type ICard from '../../domains/Card/ICard';
import { TripleTriadService } from '../../services/TripleTriadService';

export class CardRepository {
  cards: ICard[];
  tripleTriadService: TripleTriadService;

  constructor() {
    this.tripleTriadService = new TripleTriadService();
  }

  async getCardsList () {
    const tripleTriadService = new TripleTriadService();
    const response = await tripleTriadService.getCardsList();
    return this.mapResponseCardsList(response.results);
  }

  private mapResponseCard = (cardResponse: any): ICard => {
    return {
      id: cardResponse.id,
      name: cardResponse.name,
      stars: cardResponse.stars,
      description: cardResponse.description,
      iconUrl: cardResponse.icon,
      image: cardResponse.image,
      owned: false,
    }
  }
  
  private mapResponseCardsList = (responseCardsList: Object[]): ICard[] => {
    return responseCardsList.map( card => this.mapResponseCard(card))
  }
}