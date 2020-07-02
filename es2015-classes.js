class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep."
  }
  toString() {
    const {make, model, year} = this;
    return `The vehicle is a ${make} ${model} from ${year}.`
  }
}