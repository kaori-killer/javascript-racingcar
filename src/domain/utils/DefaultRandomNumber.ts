export default class DefaultRandomNumber implements RandomNumber {
  value() {
    return Math.floor(Math.random() * 10);
  }
}
