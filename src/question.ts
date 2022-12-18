export default class question {
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