//L'objectif est de créer une catégorie pour chaque quiz, et de pouvoir les afficher dans une page dédiée. Tout est en typescript
import Quiz  from './Quiz';
export default class Category {
    name: string;
    quizzes: Array<Quiz>;
    image: string;

    constructor(name: string, quizzes: Array<Quiz>, image: string) {
        this.name = name;
        this.quizzes = quizzes;
        this.image = image;
    }
}