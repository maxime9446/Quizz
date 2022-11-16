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
var question1 = new question("Quel est l'âge du capitaine ?", [42, 101, 18], 42);
var question2 = new question("Quel est la différence entre un pigeon ?", ["GLOUUUU", "Uh ?", "La longueur des pattes"], "La longueur des pattes");
var question3 = new question("Qu'est-ce qui est jaune et qui attend ?", ["Jonathan", "Homer Simpson", "Un citron pressé"], "Jonathan");
var questions = [question1, question2, question3];
var startNumberQuestions = document.querySelector("#startCard");
startNumberQuestions === null || startNumberQuestions === void 0 ? void 0 : startNumberQuestions.appendChild(startCard(questions));
var questionElementHtml = document.querySelector("#questionPage");
var startBtn = document.querySelector("[data-start-btn]");
startBtn.addEventListener("click", function () {
    var questionNumber = 0;
    var countCorrectAnswers = 0;
    var cardQuestion = document.querySelector("#questionCard");
    cardQuestion.setAttribute("style", "");
    var cardStartQuizz = document.querySelector(".start");
    cardStartQuizz.setAttribute("style", "display:none;");
    createQuestion(questions, questionNumber, countCorrectAnswers);
});
function deleteOldQuestion() {
    var oldTitle = document.querySelector("#question-title");
    oldTitle.parentNode.removeChild(oldTitle);
    var oldResponses = document.querySelectorAll(".answer");
    oldResponses.forEach(function (oldResponse) {
        oldResponse.parentNode.removeChild(oldResponse);
    });
}
function createQuestion(questions, questionNumber, countCorrectAnswers) {
    var question = questions[questionNumber];
    var divQuestionTitle = document.querySelector("#questionPage");
    divQuestionTitle === null || divQuestionTitle === void 0 ? void 0 : divQuestionTitle.appendChild(createQuestionTitle(question["title"]));
    var divQuestionAnswers = document.querySelector("#questionAnswers");
    var divQuestionReponse = createQuestionReponses(question["answers"], question, questionNumber, questions, countCorrectAnswers);
}
function createQuestionTitle(title) {
    var titleElement = document.createElement("h2");
    titleElement.setAttribute("class", "question");
    titleElement.setAttribute("id", "question-title");
    titleElement.appendChild(document.createTextNode(title));
    return titleElement;
}
function createQuestionReponses(answers, question, questionNumber, questions, countCorrectAnswers) {
    answers.forEach(function (answer) {
        var answerElement = document.createElement("li");
        answerElement.setAttribute("class", "answer");
        answerElement.appendChild(document.createTextNode(answer));
        var divQuestionAnswers = document.querySelector("#questionAnswers");
        divQuestionAnswers === null || divQuestionAnswers === void 0 ? void 0 : divQuestionAnswers.appendChild(answerElement);
    });
    var responsesBtn = document.querySelectorAll(".answer");
    responsesBtn.forEach(function (responseBtn) {
        responseBtn.addEventListener("click", function () {
            if (question.isCorrectAnswer(responseBtn.textContent)) {
                responseBtn.setAttribute("class", "answer correct");
                countCorrectAnswers = getNumberOfCorrectAnswers(countCorrectAnswers);
            }
            else {
                responseBtn.setAttribute("class", "answer wrong");
            }
            setTimeout(function () {
                nextQuestion(questionNumber, questions, countCorrectAnswers);
            }, 1500);
        });
    });
}
function getNumberOfCorrectAnswers(countCorrectAnswers) {
    return countCorrectAnswers + 1;
}
function nextQuestion(questionNumber, questions, countCorrectAnswers) {
    if (questions[questionNumber + 1]) {
        deleteOldQuestion();
        createQuestion(questions, questionNumber + 1, countCorrectAnswers);
    }
    else {
        hideQuestionCard();
        getResult(questions, countCorrectAnswers);
    }
}
function hideQuestionCard() {
    var cardQuestion = document.querySelector("#questionCard");
    cardQuestion.setAttribute("style", "display:none;");
}
function getResult(questions, countCorrectAnswers) {
    var cardResult = document.querySelector("#resultCard");
    cardResult.setAttribute("style", "");
    var showedResult = document.querySelector("#nbCorrects");
    showedResult.appendChild(setTextResult(countCorrectAnswers));
    showedResult.appendChild(countNumberOfQuestion(questions));
}
function setTextResult(correctAnswers) {
    var numberOfCorrectAnswers = document.createElement("strong");
    console.log(numberOfCorrectAnswers);
    numberOfCorrectAnswers.appendChild(document.createTextNode(correctAnswers));
    return numberOfCorrectAnswers;
}
function countNumberOfQuestion(questions) {
    return document.createTextNode(" réponses sur " + questions.length + " correctes");
}
function startCard(questions) {
    var createP = document.createElement("p");
    createP.setAttribute("class", "description");
    createP.appendChild(document.createTextNode("Il sera composé de " + questions.length + " questions."));
    return createP;
}
