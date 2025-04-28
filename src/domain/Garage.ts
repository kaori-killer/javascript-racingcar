import Car from "./Car";

// ❓ with 적절한 네이밍인가?
export default class Garage {
  readonly cars: Car[];

  constructor({ cars = [] }: { cars?: Car[] } = {}) {
    this.cars = cars;
  }

  static initial() {
    return new Garage({
      cars: [],
    });
  }

  withCar({ name, position }: { name: string; position: number }): Garage {
    const index = this.cars.findLastIndex((i) => i.name === name);

    return index < 0
      ? this.withAppendedCar({ name, position })
      : this.withMovedCar({ index, change: position });
  }

  // ❓ new Car 이것도 의존성이 있는 건가?
  private withAppendedCar({
    name,
    position,
  }: {
    name: string;
    position: number;
  }): Garage {
    const car = new Car({ name, position });

    return new Garage({
      cars: [...this.cars, car],
    });
  }

  private withMovedCar({
    index,
    change,
  }: {
    index: number;
    change: number;
  }): Garage {
    const car = this.cars[index];

    return new Garage({
      cars: [
        ...this.cars,
        new Car({ ...car, position: car.position + change }),
      ],
    });
  }

  winnerNames() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winnerNames = [
      ...new Set(
        this.cars
          .filter((car) => car.position === maxPosition)
          .map((car) => car.name)
      ),
    ];

    return winnerNames;
  }
}

// 추가 구현 해야하는 것:❗️ 자동차 이름이 중복되지 않아야 한다.
