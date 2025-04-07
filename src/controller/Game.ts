import GarageStore from "../stores/GarageStore.ts";

import InputView from "../views/InputView.ts";
import OutputView from "../views/OutputView.ts";
// Controller 이름을 지를 때 고민해야 할 점은?
export default class Game {
  private garageStore: GarageStore;

  constructor(garageStore: GarageStore) {
    this.garageStore = garageStore;
  }

  async start() {
    const carNames = await this.getCarNames();
    OutputView.printCarNames({ carNames });
    this.garageStore.addCars({ carNames, position: 0 });

    const attemptCount = await this.getAttemptCount();
    OutputView.printAttemptCount({ attemptCount });

    for (let i = 0; i < attemptCount; i++) {
      carNames.forEach((carName) => {
        const randomNumber = Math.floor(Math.random() * 10);
        const position = randomNumber >= 4 ? 1 : 0;
        this.garageStore.addCar({ name: carName, position });
      });
    }
    const { cars } = this.garageStore.snapshot;
    OutputView.printResult({ cars });
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winnerNames = [
      ...new Set(
        cars
          .filter((car) => car.position === maxPosition)
          .map((car) => car.name)
      ),
    ];
    OutputView.printWinnerNames({ winnerNames });
  }

  private async getCarNames() {
    // carNames.split(",") 어디서 처리하는 게 좋을까?
    const input = await InputView.readCarNames();
    return input.split(",");
  }

  private async getAttemptCount() {
    const input = await InputView.readAttemptCount();
    return Number(input);
  }
}

// const { cars } = this.garageStore.snapshot;
// 실행 횟수만큼
// 각 자동차가 랜덤으로 앞으로 가거나 안 가거나
