export class Form {

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
    this.acidity = bottle.acidity;
    this.alcohol = bottle.alcohol;
    this.body = bottle.body;
    this.sweetness = bottle.sweetness;
    this.tannin = bottle.tannin;
    this.sulphites = bottle.sulphites;
  }
  acidity: string;
  alcohol: string;
  body: string;
  grape: string;
  image: string;
  location: string;
  name: string;
  price: string;
  sulphites: string;
  sweetness: string;
  tannin: string;
  varieties: string;
  vineyard: string;
  quantity: string;
  year: string;
  rate: string;
  notes: string;
}
