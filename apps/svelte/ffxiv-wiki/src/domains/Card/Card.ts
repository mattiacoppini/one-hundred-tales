
export class Card {
  private _id: number;
  private _name: string;
  private _stars: number;
  private _description: string;
  private _iconUrl: string;
  private _image: string;
  private _owned: boolean;

  constructor({id, name, stars, description, iconUrl, image, owned}) {
    this._id = id;
    this._name = name;
    this._stars = stars;
    this._description = description;
    this._iconUrl = iconUrl;
    this._image = image;
    this._owned = owned;
  }

  get id(){
    return this._id;
  }

  get name(){
    return this._name;
  }
  get stars(){
    return this._stars;
  }
  get description(){
    return this._description;
  }
  get iconUrl(){
    return this._iconUrl;
  }
  get image(){
    return this._image;
  }
  get owned(){
    return this._owned;
  }

  public toggleOwned() {
    this._owned = !this._owned;
  }
}
export interface ICard {
  id: number;
  name: string;
  stars: number;
  description: string;
  iconUrl: string;
  image: string;
  owned: boolean;
}

export default Card;
