// 인터페이스와 추상 클래스를 병행하진 못할까?

// abstract 클래스: 인스턴스 생성 불가
export default abstract class Store<SnapShot> {
  snapshot = {} as SnapShot;

  getSnapshot(): SnapShot {
    return this.snapshot;
  }

  // abstract 메서드: 자식 클래스에서 반드시 구현해야 함
  protected abstract takeSnapshot(): void;
}
