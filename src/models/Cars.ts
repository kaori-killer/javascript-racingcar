import Car from "./Car";

export default class Cars {
  readonly cars: Car[];

  constructor({ cars = [] }: { cars?: Car[] } = {}) {
    this.cars = cars;
  }
}
