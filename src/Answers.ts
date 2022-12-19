// L'objectif est d'afficher si la réponse à la question de question.ts est correcte ou non, et de pouvoir passer à la question suivante. Tout est en typescript

export default class Answers {
  name: string;
  correct: boolean;

  constructor(name: string, correct: boolean) {
      this.name = name;
      this.correct = correct;
  }
}