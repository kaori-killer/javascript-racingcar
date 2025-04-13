import Store from "./Store.ts";

import Garage from "../domain/Garage.ts";
import Car from "../domain/Car.ts";

export type GarageStoreSnapshot = {
  cars: Car[];
};

// ❓ 추상 클래스 상속과 인터페이스를 둘다 받는 건 불가능할까? 둘다 할 필요가 없을까?
export default class GarageStore extends Store<GarageStoreSnapshot> {
  private garage: Garage;

  // 📚 필요한 의존성을 객체가 직접 생성하는 대신 우리가 ctor를 통해 주입한다.
  constructor(garage: Garage) {
    // 💡 독립적인 인스턴스 생성하는 구문
    super();
    this.garage = garage;
    this.takeSnapshot();
  }

  init() {
    this.garage = this.garage.init();
    this.takeSnapshot();
  }

  addCars({ carNames, position }: { carNames: string[]; position: number }) {
    carNames.forEach((name) => this.addCar({ name, position }));
  }

  addCar({ name, position }: { name: string; position: number }) {
    this.garage = this.garage.withCar({ name, position });
    this.takeSnapshot();
  }

  winnerNames(): string[] {
    return this.garage.winnerNames();
  }

  protected takeSnapshot() {
    this.snapshot = {
      cars: this.garage.cars,
    };
  }
}
