import Question from "./Question";
import Quiz from "./Quiz";
import Response from "./Answers";
import Category from "./Category";

const categories = Array(
    //First category
    new Category("Sport", [
        new Quiz("PSG", [
            new Question("En 1974, le PSG cherche des stars et bat le record français d’argent investi sur un joueur.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Il existe une référence à Louis XIV sur la plupart des logos du PSG jusqu’en 2013.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Lors de son arrivée dans le monde professionnel, le Paris Saint-Germain (PSG) est promu directement en Division 1.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ])
        ])
    ], "https://sports-village.com/img/home/multisport.webp"),
    //Second Category
    new Category("Animaux", [
        new Quiz("Les animaux du désert", [
            new Question("Le fennec peut survivre dans le désert grâce à ses immenses oreilles.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Lorsqu’il court, le guépard peut atteindre une vitesse maximale de 80 km/h.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Les cobras n’ont pas de prédateur connu ?", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ])
        ])
    ], "https://img.freepik.com/vecteurs-libre/ensemble-animaux-sauvages_1308-28248.jpg"),
    //Second Category
    new Category("Sciences", [
        new Quiz("les fusées", [
            new Question("La Saturn V est la fusée qui a propulsé Apollo 11 vers la Lune, en juillet 1969.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("La fusée Ariane est le véhicule de lancement de l’Agence spatiale européenne.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Le nom de la fusée qui a transporté l’acteur William Shatner, qui a incarné le capitaine Kirk, était l’Explorer 1.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ])
        ])
    ], "https://lewebpedagogique.com/haudrafrancais/files/2020/09/science.png"),
);

categories.forEach((category) => {
    // TODO : Pour chaque catégories j'affiche une vue
    let elementCategory = createElementCategory(category);

    let cardsList = document.querySelector(".cards-list");
    cardsList?.appendChild(elementCategory);

});

let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        startQuiz(card.getAttribute('id'));
    })
})

function startQuiz(id: string|null) {
    categories.forEach((category) => {
        if (category.name === id){
            let cardsList = document.querySelector(".cards-list");
            cardsList?.setAttribute('style', "display:none");
            let startCard = document.querySelector(".start");
            startCard?.setAttribute('style', "");

            let startNumberQuestions = document.querySelector("#startCard");
            startNumberQuestions?.appendChild(startElement(category.quizzes[0].questions, category));

            const startBtn = document.querySelector("[data-start-btn]");

            startBtn?.addEventListener("click", () => {
                let questionNumber = 0;

                let countCorrectAnswers = 0;

                let cardQuestion = document.querySelector("#questionCard");
                cardQuestion?.setAttribute("style", "");

                let cardStartQuizz = document.querySelector(".start");
                cardStartQuizz?.setAttribute("style", "display:none;");

                createElementQuestion(category.quizzes[0].questions, questionNumber, countCorrectAnswers);

                //createElementQuestion(category);
            });
        }
    });
}

function startElement(questions, category) {
    let createP = document.createElement("p");
    createP.setAttribute("class", "description");
    createP.appendChild(
        document.createTextNode(
            "Il sera composé de " + questions.length + " questions (Thème : " + category.name + ")"
        )
    );

    return createP;
}

function createElementQuestion(questions: any, questionNumber:any, countCorrectAnswers:any){
        let question = questions[questionNumber];
        let divQuestionTitle = document.querySelector("#questionPage");
        divQuestionTitle?.prepend(createQuestionTitle(question.name));

        let divQuestionReponse = createQuestionReponses(
            question.answers,
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

      answerElement.appendChild(document.createTextNode(answer.name));

      let divQuestionAnswers = document.querySelector("#questionAnswers");
      divQuestionAnswers?.appendChild(answerElement);
  });
  const responsesBtn = document.querySelectorAll(".answer");

  responsesBtn.forEach((responseBtn) => {
      responseBtn.addEventListener("click", () => {
        question.answers.forEach((reponseCorrect)=>{
          if(reponseCorrect.name == responseBtn.textContent){
            if(reponseCorrect.correct == true){
              responseBtn.setAttribute("class", "answer correct");
              countCorrectAnswers = getNumberOfCorrectAnswers(countCorrectAnswers);
            }else{
              responseBtn.setAttribute("class", "answer wrong");
            }
          }
        })
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
        createElementQuestion(questions, questionNumber + 1, countCorrectAnswers);
    } else {
        hideQuestionCard();
        getResult(questions, countCorrectAnswers);
    }
}

function deleteOldQuestion() {
    let oldTitle = document.querySelector("#question-title");

    oldTitle?.parentNode?.removeChild(oldTitle);

    let oldResponses = document.querySelectorAll(".answer");
    oldResponses.forEach((oldResponse) => {
        oldResponse.parentNode?.removeChild(oldResponse);
    });
}

function hideQuestionCard() {
    let cardQuestion = document.querySelector("#questionCard");
    cardQuestion?.setAttribute("style", "display:none;");
}

function getResult(questions, countCorrectAnswers) {
    let cardResult = document.querySelector("#resultCard");
    cardResult?.setAttribute("style", "");

    let showedResult = document.querySelector("#nbCorrects");
    showedResult?.appendChild(setTextResult(countCorrectAnswers));
    showedResult?.appendChild(countNumberOfQuestion(questions));
}

function countNumberOfQuestion(questions) {
    return document.createTextNode(
        " réponses sur " + questions.length + " correctes"
    );
}

function setTextResult(correctAnswers) {
    const numberOfCorrectAnswers = document.createElement("strong");
    numberOfCorrectAnswers.appendChild(document.createTextNode(correctAnswers));

    return numberOfCorrectAnswers;
}

function createElementCategory(category: any) {
    const divElement = document.createElement("div");
    divElement.setAttribute("class", `card`);
    divElement.setAttribute("id", `${category.name}`);

    const divImgElement = document.createElement("div");
    divImgElement.setAttribute("class", "card_image");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", category.image);
    divImgElement.appendChild(imgElement);
    divElement.appendChild(divImgElement);

    const divTitleElement = document.createElement("div");
    divTitleElement.setAttribute("class", "card_title");

    const titleElement = document.createElement("p");
    titleElement.appendChild(document.createTextNode(category.name));

    divTitleElement.appendChild(titleElement);
    divElement.appendChild(divTitleElement);

    return divElement;
}
