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
// console.log(questions);
var questionElementHtml = document.querySelector("#questionPage");
var startBtn = document.querySelector("[data-start-btn]");
startBtn.addEventListener("click", function () {
    //   console.log(questions[0]);
    var questionNumber = 0;
    var cardQuestion = document.querySelector("#questionCard");
    cardQuestion.setAttribute('style', '');
    var cardStartQuizz = document.querySelector(".start");
    cardStartQuizz.setAttribute('style', 'display:none;');
    createQuestion(questions, questionNumber);
});
function deleteOldQuestion() {
    // console.log('bonjour');
    var oldTitle = document.querySelector("#question-title");
    oldTitle.parentNode.removeChild(oldTitle);
    var oldResponses = document.querySelectorAll(".answer");
    oldResponses.forEach(function (oldResponse) {
        oldResponse.parentNode.removeChild(oldResponse);
    });
}
function createQuestion(questions, questionNumber) {
    console.log(questionNumber);
    var question = questions[questionNumber];
    // Je récupère la div qui contient le titre de ma question
    var divQuestionTitle = document.querySelector("#questionPage");
    divQuestionTitle === null || divQuestionTitle === void 0 ? void 0 : divQuestionTitle.appendChild(createQuestionTitle(question["title"]));
    var divQuestionAnswers = document.querySelector("#questionAnswers");
    var divQuestionReponse = createQuestionReponses(question["answers"], question, questionNumber, questions);
    //   divQuestionAnswers?.appendChild();
}
function createQuestionTitle(title) {
    // => <h2></h2>
    var titleElement = document.createElement("h2");
    // => <h2 class="question"></h2>
    titleElement.setAttribute("class", "question");
    // => <h2 class="question"></h2>
    titleElement.setAttribute("id", "question-title");
    // <h2 class="question">Quel est l'âge du capitaine ?</h2>
    titleElement.appendChild(document.createTextNode(title));
    return titleElement;
}
function createQuestionReponses(answers, question, questionNumber, questions) {
    answers.forEach(function (answer) {
        // => <h2></h2>
        var answerElement = document.createElement("li");
        // => <h2 class="question"></h2>
        answerElement.setAttribute("class", "answer");
        // <h2 class="question">Quel est l'âge du capitaine ?</h2>
        answerElement.appendChild(document.createTextNode(answer));
        var divQuestionAnswers = document.querySelector("#questionAnswers");
        divQuestionAnswers === null || divQuestionAnswers === void 0 ? void 0 : divQuestionAnswers.appendChild(answerElement);
    });
    var responsesBtn = document.querySelectorAll(".answer");
    responsesBtn.forEach(function (responseBtn) {
        responseBtn.addEventListener("click", function () {
            if (question.isCorrectAnswer(responseBtn.textContent)) {
                responseBtn.setAttribute("class", "answer correct");
            }
            else {
                responseBtn.setAttribute("class", "answer wrong");
            }
            setTimeout(function () {
                nextQuestion(questionNumber, questions);
            }, 1500);
        });
    });
}
function nextQuestion(questionNumber, questions) {
    if (questions[questionNumber + 1]) {
        deleteOldQuestion();
        createQuestion(questions, questionNumber + 1);
    }
    else {
        getResult();
    }
}
function getResult() { }
