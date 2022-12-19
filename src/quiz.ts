// L'objectif est créer une class pour le thème des questions, que l'on appellera quiz.

// On va créer une class Quiz qui va contenir les questions de question.ts et les réponses de reponses.ts
import Question  from './Question';
export default class Quiz {
    name: string;
    questions: Array<Question>;

    constructor(name: string, questions: Array<Question>) {
        this.name = name;
        this.questions = questions;
    }
}