import type { TripleTriadApi } from "../../services/TripleTriadApi";
import type Card from "./Card";

export interface ICardRepository {
  getCardsList(): Promise<Card[]>;
  toggleCardOwnership(cards: Card[], cardId: number): Card[];
  readOwnedCards(cards: Card[]): Card[];
}
