import Quiz from "./quiz";
export default class Category {
    title: string;
    icon: string;
    color: string;
    quizzes: Array<Quiz>;

    constructor(title: string, icon: string, color: string, quizzes: Array<Quiz>) {
        this.title = title;
        this.icon = icon;
        this.color = color;
        this.quizzes = quizzes;
    }

    getBody(): string {
        let body = this.title + "\n";
        for (let i = 0; i < this.quizzes.length; i++) {
            body += this.quizzes[i].getBody() + "\n";
        }
        return body;
    }
}