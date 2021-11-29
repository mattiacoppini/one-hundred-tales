interface IGetCardsListResponse extends Response{
  query: Object;
  count: number;
  results: Object[];
}

export class TripleTriadApi {
  
  getCardsList():Promise<IGetCardsListResponse> {
    return fetch('https://triad.raelys.com/api/cards')
      .then( response => response.json())
      .then( data => data);
  }
}