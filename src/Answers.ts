export default class Answers {
  name: string;
  correct: boolean;

  constructor(name: string, correct: boolean) {
      this.name = name;
      this.correct = correct;
  }
}