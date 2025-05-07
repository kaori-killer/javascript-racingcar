// 💡 abstract 클래스: 인스턴스 생성 불가
// abstract 메서드: 자식 클래스에서 반드시 구현해야 함

interface Store<SnapShot> {
  readonly snapshot: SnapShot;
}

export default Store;
