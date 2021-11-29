import type Card from '../domains/Card/Card';
import { CardRepository } from '../infra/Card/CardRepository';
import { CardService } from '../domains/Card/CardService';

export const getCardsListUseCase = async (): Promise<Card[]> => {
  const cardRepository = new CardService([], new CardRepository());
  return await cardRepository.getCardsList();
}

export const toggleCardOwnershipUseCase = (cards: Card[], ownedId: number): Card[] => {
  const cardService = new CardService(cards, new CardRepository());
  return cardService.toggleCardOwnership(ownedId);
}

export const readOwnedCardsUseCase = (cards: Card[]): Card[] => {
  const cardService = new CardService(cards, new CardRepository());
  return cardService.readOwnedCards();
}
