import Question from "./question";
export default class Quiz {
    title: string;
    img: string;
    questions: Array<Question>;

    constructor(title: string, img: string, questions: Array<Question>) {
        this.title = title;
        this.img = img;
        this.questions = questions;
    }

    getBody(): string {
        let body = this.title + "\n";
        for (let i = 0; i < this.questions.length; i++) {
            body += this.questions[i].getBody() + "\n";
        }
        return body;
    }
}