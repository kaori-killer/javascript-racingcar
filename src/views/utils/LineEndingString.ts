export default class LineEndingString {
  private readonly content: string;

  constructor(content: string) {
    this.content = content;
  }

  toString(): string {
    return `${this.content}\n`;
  }
}
