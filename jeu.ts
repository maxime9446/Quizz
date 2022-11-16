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
let question1 = new question(
  "Quel est l'âge du capitaine ?",
  [42, 101, 18],
  42
);
let question2 = new question(
  "Quel est la différence entre un pigeon ?",
  ["GLOUUUU", "Uh ?", "La longueur des pattes"],
  "La longueur des pattes"
);
let question3 = new question(
  "Qu'est-ce qui est jaune et qui attend ?",
  ["Jonathan", "Homer Simpson", "Un citron pressé"],
  "Jonathan"
);



// Création d'un tableau contenant toutes les questions
let questions = [question1, question2, question3];

// Création d'une variable qui va récupérer la div "questionPage"
let questionElementHtml = document.querySelector("#questionPage");

// Création d'une variable constante qui récupère les données lorsque l'on va click sur le btn
const startBtn = document.querySelector("[data-start-btn]");

// fonction addEventListener permettant d'écouter l'évènement que j'ai donner "click"
startBtn.addEventListener("click", () => {
  
  // Création d'une variable qui correspond à un int  
  let questionNumber = 0;

  let countCorrectAnswers = 0;

  // Création d'une variable qui récupère la section "questionCard"
  let cardQuestion = document.querySelector("#questionCard");
  // Définit des attributs, ici style, l'absence de l'attribut signifie que sa valeur est false
  cardQuestion.setAttribute("style", "");

  // Création d'une variable qui récupère la section "start"
  let cardStartQuizz = document.querySelector(".start");
  // Définit des attributs, ici style en display:none
  cardStartQuizz.setAttribute("style", "display:none;");

  // Fonction 
  createQuestion(questions, questionNumber, countCorrectAnswers);
});

function deleteOldQuestion() {
  // Je récupère la div de la class question et sa valeur titre
  let oldTitle = document.querySelector("#question-title");

  oldTitle.parentNode.removeChild(oldTitle);

  let oldResponses = document.querySelectorAll(".answer");
  oldResponses.forEach((oldResponse) => {
    oldResponse.parentNode.removeChild(oldResponse);
  });
}

function createQuestion(questions, questionNumber, countCorrectAnswers) {
  let question = questions[questionNumber];
  // Création d'une variable qui va récupérer la div "questionPage"
  let divQuestionTitle = document.querySelector("#questionPage");
  // si la question a deja un parent, elle est retirée puis une nouvelle s'ajoute
  divQuestionTitle?.appendChild(createQuestionTitle(question["title"]));

  // Création d'une variable qui va récupérer la div "questionAnswers"
  let divQuestionAnswers = document.querySelector("#questionAnswers");
  // Création d'une variable qui va récupérer la fonction 
  let divQuestionReponse = createQuestionReponses(
    question["answers"],
    question,
    questionNumber,
    questions,
    countCorrectAnswers
  );

  //   divQuestionAnswers?.appendChild();
}

function createQuestionTitle(title) {
  // => <h2></h2>
  const titleElement = document.createElement("h2");
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
  answers.forEach((answer) => {
    // => <h2></h2>
    const answerElement = document.createElement("li");
    // => <h2 class="question"></h2>
    answerElement.setAttribute("class", "answer");
    // <h2 class="question">Quel est l'âge du capitaine ?</h2> // si la question a deja un parent, elle est retirée puis une nouvelle s'ajoute
    answerElement.appendChild(document.createTextNode(answer));

    // Création d'une variable qui va récupérer la div "questionAnswers"
    let divQuestionAnswers = document.querySelector("#questionAnswers");
    divQuestionAnswers?.appendChild(answerElement);
  });
  const responsesBtn = document.querySelectorAll(".answer");

  responsesBtn.forEach((responseBtn) => {
    responseBtn.addEventListener("click", () => {
      if (question.isCorrectAnswer(responseBtn.textContent)) {
        responseBtn.setAttribute("class", "answer correct");
        countCorrectAnswers = getNumberOfCorrectAnswers(countCorrectAnswers);
      } else {
        responseBtn.setAttribute("class", "answer wrong");
      }
      setTimeout(function () {
        nextQuestion(questionNumber, questions, countCorrectAnswers);
      }, 1500);
    });
  });
}

function getNumberOfCorrectAnswers(countCorrectAnswers){
    return countCorrectAnswers + 1;
}

function nextQuestion(questionNumber, questions, countCorrectAnswers) {
  if (questions[questionNumber + 1]) {
    deleteOldQuestion();
    createQuestion(questions, questionNumber + 1, countCorrectAnswers);
  } else {
    hideQuestionCard();
    getResult(questions, countCorrectAnswers);
  }
}

function hideQuestionCard() {
  let cardQuestion = document.querySelector("#questionCard");
  cardQuestion.setAttribute("style", "display:none;");
}

function getResult(questions, countCorrectAnswers) {
  let cardResult = document.querySelector("#resultCard");
  cardResult.setAttribute("style", "");

  //   let numberOfQuestion = countNumberOfQuestion(questions);
  //   <strong id="numberOfCorrectAnswer"></strong> réponses sur x correctes
  let showedResult = document.querySelector("#nbCorrects");
  showedResult.appendChild(setTextResult(countCorrectAnswers));
  showedResult.appendChild(countNumberOfQuestion(questions));
  //numberOfCorrectAnswer
}

function setTextResult(correctAnswers) {
  const numberOfCorrectAnswers = document.createElement("strong");
  console.log(numberOfCorrectAnswers);
  numberOfCorrectAnswers.appendChild(document.createTextNode(correctAnswers));

  return numberOfCorrectAnswers;
}

function countNumberOfQuestion(questions) {
  return document.createTextNode(
    " réponses sur " + questions.length + " correctes"
  );
}
