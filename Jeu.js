function Quiz() {
    this.questions = [];
    this.nbcorrects=0;

    this.addQuestion = function (question) {
        this.questions.push(question);
    }
    
    this.launch = function() {

        this.questions.forEach((question)=>{
            let answerUser = prompt (question.getBody());
            if(question.isCorrectAnswer(answerUser)){
                console.log("Gagné!");
                this.nbCorrects++;
            }
            else {
                console.log("Perdu!");
            }
        })
        this.showResults();
    }

    function Question(title, answers, answerCorrect) {
        this.title = title;
        this.answers=answers;
        this.answerCorrect=answerCorrect;

        this.getBody = function() {
            let body = this.title.toUpperCase() + "\n";

            for (let i=0;i<this.answers.length;i++) {
                body += (i+1) + ". " + this.answers[i] + "\n";
        }

        return body; I
        };

        this.addAnswer = function(answer) {
        this.answers.push(answer);
        },


        this.isCorrectAnswer = function (answerUser) {
            if (answerUser == this.answerCorrect) {
                return true;
            }
        else {
            return false;
        }
    }
};

let quiz = new Quiz();

let question1 = new Question("Quel est l'âge du capitaine?", [42, 101, 18], 1);
quiz.addQuestion(question1);

let question2 = new Question("Quelle est la différence entre un pigeon?",
    ["Glouuu", "uh?", "La longueur des pattes"], 3);
quiz.addQuestion(question2);

let question3 = new Question("Qu'est-ce qui est jaune et qui attend?",
    ["Jonathan", "Homer Simpson", "Un citron pressé"], 1);
quiz.addQuestion(question3);

console.log(quiz);

//quiz.launch();}

let elNbCorrects = document.querySelectorAll("nbcorrects");
console.log(elNbCorrects);

console.log(elNbCorrects.textcontent);
console.log(elNbCorrects.innerHTML);
elNbCorrects.textcontent=quiz.nbcorrects;

let elNbQuestions = document.querySelectorAll(".nbquestions");
console.log(elNbQuestions);

//for(let i=0; i<elNbQuestions.length;i++) {
//    elNbQuestions[i].textContent = quiz.questions.length;
//
}
