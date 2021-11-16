import type ICard from '../domains/Card/ICard';
import { TripleTriadService } from '../services/TripleTriadService';
import { mapResponseCardsList } from '../utils/mappers/CardMapper';

export const getCardsList = async (): Promise<ICard[]> => {
  const tripleTriadService = new TripleTriadService();
  const response = await tripleTriadService.getCardsList();
  return mapResponseCardsList(response.results);
}