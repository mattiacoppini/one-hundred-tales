import type ICard from '../domains/Card/ICard';
import { CardRepository } from '../infra/Card/CardRepository';

export const getCardsListUseCase = async (): Promise<ICard[]> => {
  const cardRepository = new CardRepository();
  return await cardRepository.getCardsList();
}

export const setCardAsOwnedUseCase = (cards: ICard[], ownedId: number): ICard[] => {
  return [...cards.map( card => {
    if (card.id === ownedId){
      card.owned = !card.owned
    };

    return card
  })];
}

export const getOwnedCardsUseCase = (cards: ICard[]): ICard[] => {
  return cards.filter(card => card.owned);
}
