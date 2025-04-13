import RacingGame from "./controller/RacingGame.ts";

import GarageStore from "./stores/GarageStore.ts";

import Garage from "./domain/Garage.ts";

// 부 생성자 밖에서는 new를 사용하지 마세요.
// 필요한 의존성을 객체가 직접 생성하는 대신 우리가 ctor을 통해 의존성을 주입합니다.

// 항상 예외를 잡고, 체이닝하고, 다시 던지세요.
// 가장 최상위 수준에서 오직 한번만 복구하세요.
try {
  const game = new RacingGame(new GarageStore(new Garage()));
  game.start();
} catch (error) {
  throw new Error("오류가 발생했습니다.");
}
