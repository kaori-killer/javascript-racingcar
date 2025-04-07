import Car from "../models/Car.ts";

export default abstract class OutputView {
  private constructor() {}

  // View는 멍청해야 한다.
  static printCarNames({ carNames }: { carNames: string[] }) {
    console.log(carNames.join(", "));
  }

  static printAttemptCount({ attemptCount }: { attemptCount: number }) {
    console.log(attemptCount);
  }

  static printResult({ cars }: { cars: Car[] }) {
    console.log("실행 결과\n");
    cars.forEach((car) => {
      console.log(`${car.name} : ${"-".repeat(car.position)}`);
    });
    console.log("\n");
  }

  static printWinnerNames({ winnerNames }: { winnerNames: string[] }) {
    console.log(`최종 우승자: ${winnerNames.join(", ")}`);
  }
}
