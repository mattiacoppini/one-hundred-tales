interface IGetCardsListREsponse extends Response{
  query: Object;
  count: number;
  results: Object[];
}

export class TripleTriadService {
  
  getCardsList():Promise<IGetCardsListREsponse> {
    return fetch('https://triad.raelys.com/api/cards')
      .then( response => response.json())
      .then( data => data);
  }
}