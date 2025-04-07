import Car from "./Car.ts";

export default class Garage {
  readonly cars: Car[];

  constructor({ cars = [] }: { cars?: Car[] } = {}) {
    this.cars = cars;
  }

  // with 적절한 네이밍인가?
  // new Car 이것도 의존성이 있는 건가?
  withCar({ name, position }: { name: string; position: number }) {
    const index = this.cars.findLastIndex((i) => i.name === name);

    return index < 0
      ? this.withInsertedCar({ name, position })
      : this.withUpdatedCar({ index, change: position });
  }

  private withInsertedCar({
    name,
    position,
  }: {
    name: string;
    position: number;
  }) {
    const car = new Car({ name, position });

    return new Garage({
      cars: [...this.cars, car],
    });
  }

  private withUpdatedCar({ index, change }: { index: number; change: number }) {
    const car = this.cars[index];

    return new Garage({
      cars: [
        ...this.cars,
        new Car({ ...car, position: car.position + change }),
      ],
    });
  }
}
