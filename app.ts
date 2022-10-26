const firstQuestion = document.querySelector('#screenQuestion1');

function createResponses(answer) {
    const responseElement = document.createElement('li')
    responseElement.setAttribute('class', 'answer');
    const responseElementContent = document.createTextNode(answer);
    responseElement.appendChild(responseElementContent);

    console.log(answer);

    // console.log(questionTitle)

    return responseElement;
}


const dataQuestion1 = document.querySelectorAll('[data-question-1]');
console.log(dataQuestion1);
//
// dataQuestion1[0].id = "42"
// dataQuestion1

// dataQuestion1.forEach( (answer) => {
//     answer.id = "42";
// } );

dataQuestion1.forEach((answer) => {
    answer.addEventListener('click', (e) => {
        console.log(answer);
    });
});

// QUESTION 1

let question1 = {
    title: "Quel est l'âge du capitaine ?",
    answers: [42, 101, 18],
    correctAnswer: 42,
    getBody: function () {
        let body = this.title + "\n";

        for (let i = 0; i < this.answers.length; i++) {
            body += (i + 1) + ". " + this.answers[i] + "\n";
        }

        return body;
    },

    addAnswer: function (answer) {
        // this.answers[this.answers.length] = answer;
        this.answers.push(answer);
    },

    isCorrectAnswer: function (userResponse) {
        if (userResponse == this.correctAnswer) {
            return true;
        } else {
            return false;
        }
    }
};

createResponses(question1);

// console.log(question1);
let bodyQuestion1 = question1.getBody();
// console.log(bodyQuestion1);
//
// question1.addAnswer(11);
// question1.addAnswer(22);
// console.log(question1)
//
// let userResponse1 = prompt(bodyQuestion1);


// if (question1.isCorrectAnswer(userResponse1)) {
//     console.log("Bonne réponse !")
// } else {
//     console.log("Bonne réponse !")
// }


// QUESTION 2

let question2 = {
    title: "Quel est la différence entre un pigeon ?",
    answers: ["GLOUUUU", "Uh ?", "La longueur des pattes"],
    correctAnswer: "la longueur des pattes",
    getBody: function () {
        let body = this.title + "\n";

        for (let i = 0; i < this.answers.length; i++) {
            body += (i + 1) + ". " + this.answers[i] + "\n";
        }

        return body;
    },

    addAnswer: function (answer) {
        // this.answers[this.answers.length] = answer;
        this.answers.push(answer);
    },

    isCorrectAnswer: function (userResponse) {
        if (userResponse == this.correctAnswer) {
            return true;
        } else {
            return false;
        }
    }
};

// console.log(question2);
let bodyQuestion2 = question2.getBody();
// console.log(bodyQuestion2);

// question2.addAnswer(11);
// question2.addAnswer(22);
// console.log(question1)
//
// let userResponse2 = prompt(bodyQuestion2);
// if (question2.isCorrectAnswer(userResponse2)) {
//     console.log("Bonne réponse !")
// } else {
//     console.log("Bonne réponse !")
// }

// QUESTION 3

let question3 = {
    title: "Qu'est-ce qui est jaune et qui attend ?",
    answers: ["Jonathan", "Homer Simpson", "Un citron pressé"],
    correctAnswer: "Jonathan",
    getBody: function () {
        let body = this.title + "\n";

        for (let i = 0; i < this.answers.length; i++) {
            body += (i + 1) + ". " + this.answers[i] + "\n";
        }

        return body;
    },

    addAnswer: function (answer) {
        // this.answers[this.answers.length] = answer;
        this.answers.push(answer);
    },

    isCorrectAnswer: function (userResponse) {
        if (userResponse == this.correctAnswer) {
            return true;
        } else {
            return false;
        }
    }
};

// console.log(question3);
let bodyQuestion3 = question3.getBody();
// console.log(bodyQuestion3);
//
// question3.addAnswer(11);
// question3.addAnswer(22);
// console.log(question3)
//
// let userResponse3 = prompt(bodyQuestion3);
// if (question2.isCorrectAnswer(userResponse3)) {
//     console.log("Bonne réponse !")
// } else {
//     console.log("Bonne réponse !")
// }

console.log(question1)

function test(question1) {
    question1.answers.forEach((answer) => {
        console.log('bonjour');
        firstQuestion.append(createResponses(answer));
    });
}

test(question1);