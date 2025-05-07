interface InputView {
  readCarNames(): Promise<string>;
  readAttemptCount(): Promise<string>;
}

export default InputView;
