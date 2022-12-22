import Response from './Answers';

export default class Question {
    name: string;
    answers: Array<Response>;

    constructor(name: string, answers: Array<Response>) {
        this.name = name;
        this.answers = answers;
    }


    createQuestionTitle(title) {
        const titleElement = document.createElement("h2");

        titleElement.setAttribute("class", "question");

        titleElement.setAttribute("id", "question-title");

        titleElement.appendChild(document.createTextNode(title));

        return titleElement;
    }


}