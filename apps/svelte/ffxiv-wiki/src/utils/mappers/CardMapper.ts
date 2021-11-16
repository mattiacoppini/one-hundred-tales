import type ICard from '../../domains/Card/ICard';

export const mapResponseCard = (cardResponse: any): ICard => {
  return {
    id: cardResponse.id,
    name: cardResponse.name,
    stars: cardResponse.stars,
    description: cardResponse.description,
    icon: cardResponse.icon,
    image: cardResponse.image,
  }
}

export const mapResponseCardsList = (responseCardsList: Object[]): ICard[] => {
  return responseCardsList.map( card => mapResponseCard(card))
}