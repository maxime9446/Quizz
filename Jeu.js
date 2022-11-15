var question = /** @class */ (function () {
    function question(title, answers, correctAnswer) {
        this.title = title;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    question.prototype.isCorrectAnswer = function (userResponse) {
        if (userResponse == this.correctAnswer) {
            return true;
        }
        else {
            return false;
        }
    };
    return question;
}());
//Nouvelle question
var question1 = new question("Quel est l\'âge du capitaine ?", [42, 101, 18], 42);
var question2 = new question("Quel est la différence entre un pigeon ?", ["GLOUUUU", "Uh ?", "La longueur des pattes"], "La longueur des pattes");
var question3 = new question("Qu'est-ce qui est jaune et qui attend ?", ["Jonathan", "Homer Simpson", "Un citron pressé"], "Jonathan");
