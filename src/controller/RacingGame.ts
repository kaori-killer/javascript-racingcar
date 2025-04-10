import DefaultRandomNumber from "../domain/utils/DefaultRandomNumber.ts";

import GarageStore from "../stores/GarageStore.ts";

import InputView from "../views/InputView.ts";
import OutputView from "../views/OutputView.ts";

// Controller 이름을 지를 때 고민해야 할 점은?
// carNames.split(",") 어디서 처리하는 게 좋을까?
// 자동차등록 함수에서 입력과 출력 그리고 저장까지 3가지 일을 하는 게 맞을까?
export default class RacingGame {
  private garageStore: GarageStore;

  constructor(garageStore: GarageStore) {
    this.garageStore = garageStore;
  }

  async start() {
    await this.자동차등록();
    await this.자동차경주();
    this.경주내용출력();
    this.우승자출력();
  }

  private async 자동차등록() {
    const carNames = await this.getCarNames();
    OutputView.printCarNames({ carNames });

    this.garageStore.addCars({ carNames, position: 0 });
  }

  // 여기에 있는 도메인 로직을 어디로 이동시킬 수 있을까?
  private async 자동차경주() {
    const attemptCount = await this.getAttemptCount();
    OutputView.printAttemptCount({ attemptCount });

    const { cars } = this.garageStore.snapshot;
    for (let i = 0; i < attemptCount; i++) {
      cars.forEach((car) => {
        const position = new DefaultRandomNumber().value() >= 4 ? 1 : 0; // 수정하고 싶다...
        this.garageStore.addCar({ name: car.name, position });
      });
    }
  }

  private 경주내용출력() {
    const { cars } = this.garageStore.snapshot;
    OutputView.printResult({ cars });
  }

  private 우승자출력() {
    const winnerNames = this.garageStore.winnerNames();
    OutputView.printWinnerNames({ winnerNames });
  }

  private async getCarNames() {
    const input = await InputView.readCarNames();
    return input.split(",");
  }

  private async getAttemptCount() {
    const input = await InputView.readAttemptCount();
    return Number(input);
  }
}
