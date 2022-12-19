// L'objectif est de créer chaque question de la class quizz de quizz.ts, et de pouvoir les afficher dans une page dédiée. Tout est en typescript
import Response  from './Answers';
export default class Question {
    name: string;
    answers: Array<Response>;

    constructor(name: string, answers: Array<Response>) {
        this.name = name;
        this.answers = answers;
    }

    isCorrectAnswer(): boolean {
      if (this.answers.correct) {
        return true;
      } else {
        return false;
      }
    }
}