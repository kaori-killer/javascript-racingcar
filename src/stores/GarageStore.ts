import Store from "./Store.ts";

import Garage from "../models/Garage.ts";
import Car from "../models/Car.ts";

export type GarageStoreSnapshot = {
  cars: Car[];
};

export default class GarageStore extends Store<GarageStoreSnapshot> {
  private garage: Garage;

  // 필요한 의존성을 객체가 직접 생성하는 대신 우리가 ctor를 통해 주입
  constructor(garage: Garage) {
    // 독립적인 인스턴스 생성
    super();
    this.garage = garage;
    this.takeSnapshot();
  }

  addCars({ carNames, position }: { carNames: string[]; position: number }) {
    carNames.forEach((name) => this.addCar({ name, position }));
  }

  addCar({ name, position }: { name: string; position: number }) {
    this.garage = this.garage.withCar({ name, position });
    this.takeSnapshot();
  }

  protected takeSnapshot() {
    this.snapshot = {
      cars: this.garage.cars,
    };
  }
}
