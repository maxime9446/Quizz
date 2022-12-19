import Question from "./Question";
import Quiz from "./Quiz";
import Response from "./Answers";
import Category from "./Category";

const categories = Array(
    //First category
    new Category("Sport", [
        new Quiz("Populaire", [
            new Question("Quel est le sport le plus populaire au monde ?", [
                new Response("Football", false),
                new Response("Basketball", true),
                new Response("Tennis", false)
            ]),
            new Question("Quel est le sport le plus populaire en France ?", [
                new Response("Football", true),
                new Response("Basketball", false),
                new Response("Tennis", false)
            ]),
            new Question("Quel est le sport le plus populaire en Belgique ?", [
                new Response("Football", false),
                new Response("Basketball", false),
                new Response("Tennis", true)
            ])
        ])
    ], "https://sports-village.com/img/home/multisport.webp"),
    //Second Category
    new Category("Animaux", [
        new Quiz("Populaire", [
            new Question("Quel est le sport le plus populaire au monde ?", [
                new Response("Football", false),
                new Response("Basketball", true),
                new Response("Tennis", false)
            ]),
            new Question("Quel est le sport le plus populaire en France ?", [
                new Response("Football", true),
                new Response("Basketball", false),
                new Response("Tennis", false)
            ]),
            new Question("Quel est le sport le plus populaire en Belgique ?", [
                new Response("Football", false),
                new Response("Basketball", false),
                new Response("Tennis", true)
            ])
        ])
    ], "https://img.freepik.com/vecteurs-libre/ensemble-animaux-sauvages_1308-28248.jpg"),
    //Second Category
    new Category("Sciences", [
        new Quiz("Populaire", [
            new Question("Quel est le sport le plus populaire au monde ?", [
                new Response("Football", false),
                new Response("Basketball", true),
                new Response("Tennis", false)
            ]),
            new Question("Quel est le sport le plus populaire en France ?", [
                new Response("Football", true),
                new Response("Basketball", false),
                new Response("Tennis", false)
            ]),
            new Question("Quel est le sport le plus populaire en Belgique ?", [
                new Response("Football", false),
                new Response("Basketball", false),
                new Response("Tennis", true)
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
        divQuestionTitle?.appendChild(createQuestionTitle(question.name));

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
    question.answers.forEach((responseBtn:any) => {
        responseBtn.addEventListener("click", () => {
           //console.log(question.answers.);
            switch (responseBtn.correct) {
                case true:
                    responseBtn.setAttribute("class", "answer correct");
                    countCorrectAnswers = getNumberOfCorrectAnswers(countCorrectAnswers);
                    break;
                case false :
                    responseBtn.setAttribute("class", "answer wrong");
                    break
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
    console.log(numberOfCorrectAnswers);
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









/*
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
*/