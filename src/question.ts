import Reponse  from './answer';
export default class Question {
  wording: string;
  img: string;
  reponses: Array<Reponse>;

  constructor(wording: string, img: string, reponses: Array<Reponse>) {
    this.wording = wording;
    this.img = img;
    this.reponses = reponses;
  }

  //affiche la question
  getBody(): string {
    let body = this.wording + "\n";
    for (let i = 0; i < this.reponses.length; i++) {
      body += this.reponses[i].getBody() + "\n";
    }
    return body;
  }
}