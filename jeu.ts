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

let questions = [question1, question2, question3];

let startNumberQuestions = document.querySelector("#startCard");
startNumberQuestions?.appendChild(startCard(questions));

let questionElementHtml = document.querySelector("#questionPage");

const startBtn = document.querySelector("[data-start-btn]");

startBtn.addEventListener("click", () => {
  let questionNumber = 0;

  let countCorrectAnswers = 0;

  let cardQuestion = document.querySelector("#questionCard");
  cardQuestion.setAttribute("style", "");

  let cardStartQuizz = document.querySelector(".start");
  cardStartQuizz.setAttribute("style", "display:none;");

  createQuestion(questions, questionNumber, countCorrectAnswers);
});

function deleteOldQuestion() {
  let oldTitle = document.querySelector("#question-title");

  oldTitle.parentNode.removeChild(oldTitle);

  let oldResponses = document.querySelectorAll(".answer");
  oldResponses.forEach((oldResponse) => {
    oldResponse.parentNode.removeChild(oldResponse);
  });
}

function createQuestion(questions, questionNumber, countCorrectAnswers) {
  let question = questions[questionNumber];
  let divQuestionTitle = document.querySelector("#questionPage");
  divQuestionTitle?.appendChild(createQuestionTitle(question["title"]));

  let divQuestionAnswers = document.querySelector("#questionAnswers");
  let divQuestionReponse = createQuestionReponses(
    question["answers"],
    question,
    questionNumber,
    questions,
    countCorrectAnswers
  );
}

function createQuestionTitle(title) {
  const titleElement = document.createElement("h2");

  titleElement.setAttribute("class", "question");

  titleElement.setAttribute("id", "question-title");

  titleElement.appendChild(document.createTextNode(title));

  return titleElement;
}

function createQuestionReponses(
  answers,
  question,
  questionNumber,
  questions,
  countCorrectAnswers
) {
  answers.forEach((answer) => {
    const answerElement = document.createElement("li");

    answerElement.setAttribute("class", "answer");

    answerElement.appendChild(document.createTextNode(answer));

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

function getNumberOfCorrectAnswers(countCorrectAnswers) {
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

  let showedResult = document.querySelector("#nbCorrects");
  showedResult.appendChild(setTextResult(countCorrectAnswers));
  showedResult.appendChild(countNumberOfQuestion(questions));
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

function startCard(questions) {
  let createP = document.createElement("p");
  createP.setAttribute("class", "description");
  createP.appendChild(
    document.createTextNode(
      "Il sera composé de " + questions.length + " questions."
    )
  );

  return createP;
}
