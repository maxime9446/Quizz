class question {
    title;
    answers;
    correctAnswer;

    constructor(title, answers, correctAnswer) {
        this.title = title;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    isCorrectAnswer(userResponse) {
        if (userResponse == this.correctAnswer) {
            return true;
        } else {
            return false;
        }
    }
}

//Nouvelle question
let question1 = new question("Quel est l\'âge du capitaine ?", [42, 101, 18], 42);
let question2 = new question("Quel est la différence entre un pigeon ?", ["GLOUUUU", "Uh ?", "La longueur des pattes"], "La longueur des pattes");
let question3 = new question("Qu'est-ce qui est jaune et qui attend ?", ["Jonathan", "Homer Simpson", "Un citron pressé"], "Jonathan");

