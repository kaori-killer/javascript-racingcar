import Store from "./Store";

import Garage from "../domain/Garage";
import Car from "../domain/Car";

// 💡 독립적인 인스턴스 생성하는 구문
// super();

export type GarageStoreSnapshot = {
  cars: Car[];
};

// ❓ 추상 클래스 상속과 인터페이스를 둘다 받는 건 불가능할까? 둘다 할 필요가 없을까?
export default class GarageStore implements Store<GarageStoreSnapshot> {
  private garage: Garage;

  // 📚 필요한 의존성을 객체가 직접 생성하는 대신 우리가 ctor를 통해 주입한다.
  constructor(garage: Garage) {
    this.garage = garage;
  }

  init() {
    this.garage = this.garage.init();
  }

  addCars({ carNames, position }: { carNames: string[]; position: number }) {
    carNames.forEach((name) => this.addCar({ name, position }));
  }

  addCar({ name, position }: { name: string; position: number }) {
    this.garage = this.garage.withCar({ name, position });
  }

  winnerNames(): string[] {
    return this.garage.winnerNames();
  }

  get snapshot(): GarageStoreSnapshot {
    return {
      cars: this.garage.cars,
    };
  }
}
