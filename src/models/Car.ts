export default class Car {
  readonly name;

  readonly position;

  constructor({ name, position }: { name: string; position: number }) {
    this.name = name;
    this.position = position;
  }
}
