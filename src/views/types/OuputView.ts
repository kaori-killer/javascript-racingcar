import Car from "../../domain/Car";

interface OutputView {
  printCarNames({ carNames }: { carNames: string[] }): void;
  printAttemptCount(attemptCount: { attemptCount: number }): void;
  printResult(cars: { cars: Car[] }): void;
  printWinnerNames(winnerNames: { winnerNames: string[] }): void;
}

export default OutputView;
