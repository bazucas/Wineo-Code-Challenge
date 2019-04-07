import {Form} from './form';

export class Bottle {

  constructor(bottle: Form) {
    this.name = bottle.name;
    this.vineyard = bottle.vineyard;
    this.location = bottle.location;
    this.grape = bottle.grape;
    this.year = bottle.year;
    this.price = bottle.price;
    this.varieties = bottle.varieties;
    this.quantity = bottle.quantity;
    this.image = bottle.image;
    this.rate = bottle.rate;
    this.notes = bottle.notes;
    this.characteristics = new Characteristics(bottle);
  }
  id: number;
  name: string;
  vineyard: string;
  location: string;
  grape: string;
  year: string;
  price: string;
  varieties: string;
  quantity: string;
  image: string;
  rate: string;
  notes: string;
  comments: string[];
  characteristics: Characteristics;
}

class Characteristics {
  constructor(bottle: Form) {
    this.sweetness = +bottle.sweetness;
    this.acidity = +bottle.acidity;
    this.tannin = +bottle.tannin;
    this.alcohol = +bottle.alcohol;
    this.body = +bottle.body;
    this.sulphites = bottle.sulphites.toLowerCase() === 'true';
  }
  sweetness: number;
  acidity: number;
  tannin: number;
  alcohol: number;
  body: number;
  sulphites: boolean;
}

