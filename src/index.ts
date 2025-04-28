import RacingGame from "./controller/RacingGame";

import GarageStore from "./stores/GarageStore";

import Garage from "./domain/Garage";

// 📚 항상 예외를 체이닝하고 절대로 원래 예외를 무시하지 않는다.
// 📚 예외를 잡은 즉시 새로운 예외를 던진다. (예외 체이닝)
// 📚 원래의 문제를 새로운 문제로 감싸서 함께 상위로 던진다.
// 📚 가장 최상위 수준에서 오직 한번만 복구하세요.

// 📚 필요한 의존성을 객체가 직접 생성하는 대신 우리가 ctor을 통해 의존성을 주입합니다.

async function main() {
  try {
    const store = new GarageStore(new Garage());
    const game = new RacingGame(store);
    await game.start();
  } catch (error) {
    throw new Error("죄송하지만 문제가 발생했습니다", { cause: error });
  }
}

// 여긴 딱히 비동기가 필요없네~
main();

// 📚 : 책에 나온 내용
// ❓ : 구현하면서 궁금한 내용
// 💡 : 구현하면서 떠올린 내용
