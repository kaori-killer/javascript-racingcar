import readLineAsync from "./utils/readLineAsync";
import LineEndingString from "./utils/LineEndingString";

// 💡 상태를 다루지 않는다 class로 만들어야 할까? 객체 리터럴로 만들어야 할까?
// 📚 class 유틸리티 클래스를 구현할 경우에는 클래스의 인스턴스 생성을 막기 위해
// private ctor을 추가하는 것이 좋다.
// ❓ static 사용 금지라고 했는데, 이 부분을 그러면 어떻게 개선할 수 있을까.
// 💡 final 키워드 쓰려고 했는데 자바스크립트에는 없네.

// 메시지 상수를 어떻게 처리해야 할까?
export const InputView = {
  async readCarNames(): Promise<string> {
    const input = await readLineAsync(
      new LineEndingString(
        "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).",
      ).toString(),
    );
    return input;
  },
  async readAttemptCount(): Promise<string> {
    const input = await readLineAsync(
      new LineEndingString("시도할 횟수는 몇 회인가요?").toString(),
    );
    return input;
  },
};

export default InputView;
