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
// Création d'un tableau contenant toutes les questions
var questions = [question1, question2, question3];
// Création d'une variable qui va récupérer la div "questionPage"
var questionElementHtml = document.querySelector("#questionPage");
// Création d'une variable constante qui récupère les données lorsque l'on va click sur le btn
var startBtn = document.querySelector("[data-start-btn]");
// fonction addEventListener permettant d'écouter l'évènement que j'ai donner "click"
startBtn.addEventListener("click", function () {
    // Création d'une variable qui correspond à un int  
    var questionNumber = 0;
    var countCorrectAnswers = 0;
    // Création d'une variable qui récupère la section "questionCard"
    var cardQuestion = document.querySelector("#questionCard");
    // Définit des attributs, ici style, l'absence de l'attribut signifie que sa valeur est false
    cardQuestion.setAttribute("style", "");
    // Création d'une variable qui récupère la section "start"
    var cardStartQuizz = document.querySelector(".start");
    // Définit des attributs, ici style en display:none
    cardStartQuizz.setAttribute("style", "display:none;");
    // Fonction 
    createQuestion(questions, questionNumber, countCorrectAnswers);
});
function deleteOldQuestion() {
    // Je récupère la div de la class question et sa valeur titre
    var oldTitle = document.querySelector("#question-title");
    oldTitle.parentNode.removeChild(oldTitle);
    var oldResponses = document.querySelectorAll(".answer");
    oldResponses.forEach(function (oldResponse) {
        oldResponse.parentNode.removeChild(oldResponse);
    });
}
function createQuestion(questions, questionNumber, countCorrectAnswers) {
    var question = questions[questionNumber];
    // Création d'une variable qui va récupérer la div "questionPage"
    var divQuestionTitle = document.querySelector("#questionPage");
    // si la question a deja un parent, elle est retirée puis une nouvelle s'ajoute
    divQuestionTitle === null || divQuestionTitle === void 0 ? void 0 : divQuestionTitle.appendChild(createQuestionTitle(question["title"]));
    // Création d'une variable qui va récupérer la div "questionAnswers"
    var divQuestionAnswers = document.querySelector("#questionAnswers");
    // Création d'une variable qui va récupérer la fonction 
    var divQuestionReponse = createQuestionReponses(question["answers"], question, questionNumber, questions, countCorrectAnswers);
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
//passe en paramètre les valeurs ()
function createQuestionReponses(answers, question, questionNumber, questions, countCorrectAnswers) {
    answers.forEach(function (answer) {
        // => <h2></h2>
        var answerElement = document.createElement("li");
        // => <h2 class="question"></h2>
        answerElement.setAttribute("class", "answer");
        // <h2 class="question">Quel est l'âge du capitaine ?</h2> // si la question a deja un parent, elle est retirée puis une nouvelle s'ajoute
        answerElement.appendChild(document.createTextNode(answer));
        // Création d'une variable qui va récupérer la div "questionAnswers"
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
    //   let numberOfQuestion = countNumberOfQuestion(questions);
    //   <strong id="numberOfCorrectAnswer"></strong> réponses sur x correctes
    var showedResult = document.querySelector("#nbCorrects");
    showedResult.appendChild(setTextResult(countCorrectAnswers));
    showedResult.appendChild(countNumberOfQuestion(questions));
    //numberOfCorrectAnswer
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
