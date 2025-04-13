export default class Car {
  readonly name;

  readonly position;

  // 📚 객체 초기화에는 코드가 없어야하고 인자를 건드려서는 안됩니다. (단, 검증과 저장은 가능)
  // 📚 부 생성자 밖에서는 new를 사용하지 마세요.
  constructor({ name, position }: { name: string; position: number }) {
    if (name.length < 1 || name.length > 5) {
      throw new Error("자동차 이름은 1자 이상 5자 이하입니다.");
    }

    this.name = name;
    this.position = position;
  }
}

// 시도 횟수는 양의 정수이다.
// 사용자가 잘못된 입력 값을 작성한 경우 에러 메시지를 보여주고,
// 다시 입력할 수 있게 한다.
