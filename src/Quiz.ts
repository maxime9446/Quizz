// L'objectif est créer une class pour le thème des questions, que l'on appellera quiz.

// On va créer une class Quiz qui va contenir les questions de question.ts
import Question from './Question';

export default class Quiz {
    name: string;
    questions: Array<Question>;
    image: string;

    constructor(name: string, questions: Array<Question>, image: string) {
        this.name = name;
        this.questions = questions;
        this.image = image;
    }

// Création de l'élement Quiz, il permet de générer le html
    createElementQuiz(quiz: any, index: any) {
        const divElement = document.createElement("div");
        divElement.setAttribute("class", `card quiz`);
        divElement.setAttribute("id", `${index}`);

        const divImgElement = document.createElement("div");
        divImgElement.setAttribute("class", "card_image");

        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", quiz.image);
        divImgElement.appendChild(imgElement);
        divElement.appendChild(divImgElement);

        const divTitleElement = document.createElement("div");
        divTitleElement.setAttribute("class", "card_title");

        const titleElement = document.createElement("p");
        titleElement.appendChild(document.createTextNode(quiz.name));

        divTitleElement.appendChild(titleElement);
        divElement.appendChild(divTitleElement);

        return divElement;
    }

    createElementQuizz(quiz: any, index: any) {
        let elementCategory = quiz.createElementQuiz(quiz, index);

        let cardsList = document.querySelector(".listQuiz");
        cardsList?.appendChild(elementCategory);
    }

    createElementQuestion(questions: any, questionNumber: any, countCorrectAnswers: any) {
        let question = questions[questionNumber];
        let divQuestionTitle = document.querySelector("#questionPage");
        divQuestionTitle?.prepend(question.createQuestionTitle(question.name));

        let divQuestionReponse = this.createQuestionReponses(
            question.answers,
            question,
            questionNumber,
            questions,
            countCorrectAnswers
        );
    }

    createQuestionReponses(
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
                question.answers.forEach((reponseCorrect) => {
                    if (reponseCorrect.name == responseBtn.textContent) {
                        if (reponseCorrect.correct == true) {
                            responseBtn.setAttribute("class", "answer correct");
                            countCorrectAnswers = this.getNumberOfCorrectAnswers(countCorrectAnswers);
                        } else {
                            responseBtn.setAttribute("class", "answer wrong");
                        }
                    }
                })
                setTimeout(() => {
                    this.nextQuestion(questionNumber, questions, countCorrectAnswers);
                }, 1500);
            });
        });
    }

    nextQuestion(questionNumber, questions, countCorrectAnswers) {
        if (questions[questionNumber + 1]) {
            this.deleteOldQuestion();
            this.createElementQuestion(questions, questionNumber + 1, countCorrectAnswers);
        } else {
            this.hideQuestionCard();
            this.getResult(questions, countCorrectAnswers);
        }
    }

    getNumberOfCorrectAnswers(countCorrectAnswers) {
        return countCorrectAnswers + 1;
    }

    deleteOldQuestion() {
        let oldTitle = document.querySelector("#question-title");

        oldTitle?.parentNode?.removeChild(oldTitle);

        let oldResponses = document.querySelectorAll(".answer");
        oldResponses.forEach((oldResponse) => {
            oldResponse.parentNode?.removeChild(oldResponse);
        });
    }

    hideQuestionCard() {
        let cardQuestion = document.querySelector("#questionCard");
        cardQuestion?.setAttribute("style", "display:none;");
    }

    getResult(questions, countCorrectAnswers) {
        let cardResult = document.querySelector("#resultCard");
        cardResult?.setAttribute("style", "");

        let showedResult = document.querySelector("#nbCorrects");
        showedResult?.appendChild(this.setTextResult(countCorrectAnswers));
        showedResult?.appendChild(this.countNumberOfQuestion(questions));
    }

    setTextResult(correctAnswers) {
        const numberOfCorrectAnswers = document.createElement("strong");
        numberOfCorrectAnswers.appendChild(document.createTextNode(correctAnswers));

        return numberOfCorrectAnswers;
    }

    countNumberOfQuestion(questions) {
        return document.createTextNode(
            " réponses sur " + questions.length + " correctes"
        );
    }

    startElement(questions, category) {
        let createP = document.createElement("p");
        createP.setAttribute("class", "description");
        createP.appendChild(
            document.createTextNode(
                "Il sera composé de " + questions.length + " questions (Thème : " + category.name + ")"
            )
        );

        return createP;
    }


}