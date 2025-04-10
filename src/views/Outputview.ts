import Car from "../domain/Car.ts";

// View는 멍청해야 한다.
// printResult에 Car를 통채로 넘겨줄까? 아니면 구조분해할당을 할까?
const OutputView = {
  printCarNames({ carNames }: { carNames: string[] }) {
    console.log(carNames.join(", "));
  },
  printAttemptCount({ attemptCount }: { attemptCount: number }) {
    console.log(attemptCount);
  },
  printResult({ cars }: { cars: Car[] }) {
    console.log("실행 결과\n");
    cars.forEach((car) => {
      console.log(`${car.name} : ${"-".repeat(car.position)}`);
    });
    console.log("\n");
  },
  printWinnerNames({ winnerNames }: { winnerNames: string[] }) {
    console.log(`최종 우승자: ${winnerNames.join(", ")}`);
  },
};

export default OutputView;
