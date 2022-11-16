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
// console.log(questions);

let questionElementHtml = document.querySelector("#questionPage");

const startBtn = document.querySelector("[data-start-btn]");

startBtn.addEventListener("click", () => {
  //   console.log(questions[0]);
  let questionNumber = 0;

  let cardQuestion = document.querySelector("#questionCard")
  cardQuestion.setAttribute('style', '');

  let cardStartQuizz = document.querySelector(".start")
  cardStartQuizz.setAttribute('style', 'display:none;');

  createQuestion(questions, questionNumber);
});

function deleteOldQuestion() {
  // console.log('bonjour');
  let oldTitle = document.querySelector("#question-title");

  oldTitle.parentNode.removeChild(oldTitle);

  let oldResponses = document.querySelectorAll(".answer");
  oldResponses.forEach((oldResponse) => {
    oldResponse.parentNode.removeChild(oldResponse);
  });
}

function createQuestion(questions, questionNumber) {
  console.log(questionNumber);

  let question = questions[questionNumber];
  // Je récupère la div qui contient le titre de ma question
  let divQuestionTitle = document.querySelector("#questionPage");
  divQuestionTitle?.appendChild(createQuestionTitle(question["title"]));

  let divQuestionAnswers = document.querySelector("#questionAnswers");
  let divQuestionReponse = createQuestionReponses(
    question["answers"],
    question,
    questionNumber,
    questions
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

function createQuestionReponses(answers, question, questionNumber, questions) {
  answers.forEach((answer) => {
    // => <h2></h2>
    const answerElement = document.createElement("li");
    // => <h2 class="question"></h2>
    answerElement.setAttribute("class", "answer");
    // <h2 class="question">Quel est l'âge du capitaine ?</h2>
    answerElement.appendChild(document.createTextNode(answer));

    let divQuestionAnswers = document.querySelector("#questionAnswers");
    divQuestionAnswers?.appendChild(answerElement);
  });
  const responsesBtn = document.querySelectorAll(".answer");

  responsesBtn.forEach((responseBtn) => {
    responseBtn.addEventListener("click", () => {
      if (question.isCorrectAnswer(responseBtn.textContent)) {
        responseBtn.setAttribute("class", "answer correct");
      } else {
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
  } else {
    getResult();
  }
}

function getResult() {}
