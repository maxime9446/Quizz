export default class Answer {
    content: string;
    isCorrect: boolean;
  
    constructor(content: string, isCorrect: boolean) {
      this.content = content;
      this.isCorrect = isCorrect;
    }
  
    //Affiche les réponses
    getBody(): string {
      let body = this.content + "\n";
      return body;
    }
  
    //Vérifie si la réponse est correcte
    isCorrectAnswer(): boolean {
      if (this.isCorrect) {
        return true;
      } else {
        return false;
      }
    }
  }