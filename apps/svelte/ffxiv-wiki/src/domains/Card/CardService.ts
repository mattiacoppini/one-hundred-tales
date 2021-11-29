import type Card from './Card';
import type { ICardRepository } from './ICardRepository';

export class CardService {
  _cards: Card[];
  _cardRepository: ICardRepository;

  constructor(cards: Card[], cardRepository: ICardRepository) {
    this._cards = cards;
    this._cardRepository = cardRepository;
  }

  getCardsList(): Promise<Card[]> {
    return this._cardRepository.getCardsList();
  }

  toggleCardOwnership(cardId: number): Card[] {
    this._cards = this._cardRepository.toggleCardOwnership(this._cards, cardId)

    return this._cards;
  }

  readOwnedCards(): Card[] {
    this._cards = this._cardRepository.readOwnedCards(this._cards);

    return this._cards;
  }

}