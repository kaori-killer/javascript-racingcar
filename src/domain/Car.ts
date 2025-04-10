export default class Car {
  readonly name;

  readonly position;

  constructor({ name, position }: { name: string; position: number }) {
    this.name = name;
    this.position = position;

    this.validateName();
    this.validatePosition();
  }

  validateName() {}

  validatePosition() {}
}

//  자동차 이름은 1자 이상 5자 이하이다.
// 자동차 이름에 공백이 들어가지 않는다.
// 자동차 이름이 중복되지 않는다.
// 시도 횟수는 양의 정수이다.
// 사용자가 잘못된 입력 값을 작성한 경우 에러 메시지를 보여주고,
// 다시 입력할 수 있게 한다.
