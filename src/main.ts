import Question from "./Question";
import Quiz from "./Quiz";
import Response from "./Answers";
import Category from "./Category";

const categories = Array(
    //First category
    new Category("Sport", [
        // Quiz 1
        new Quiz("PSG", [
            new Question("En 1974, le PSG cherche des stars et bat le record français d’argent investi sur un joueur.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Il existe une référence à Louis XIV sur la plupart des logos du PSG jusqu’en 2013.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Lors de son arrivée dans le monde professionnel, le Paris Saint-Germain (PSG) est promu directement en Division 1.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ])
        ]),
        // Quiz 2
        new Quiz("L’Olympique de Marseille", [
            new Question("L’Olympique de Marseille détient le record de défaites consécutives en Ligue des champions.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Josip Skoblar est le détenteur du record du nombre de buts marqués en première division en une saison.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Jean-Pierre Papin est le meilleur buteur de l’histoire du club.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ])
        ]),
        // Quiz 3
        new Quiz("Le Lille Olympique Sporting Club", [
            new Question("Le LOSC a gagné sa première Coupe de France en 2011 contre le PSG.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Franck Ribéry a été renvoyé du centre de formation du LOSC.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Le LOSC a remporté le premier championnat professionnel français.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ])
        ])
    ], "https://sports-village.com/img/home/multisport.webp"),
    //Second Category
    new Category("Animaux", [
        // Quiz 1
        new Quiz("Les animaux du désert", [
            new Question("Le fennec peut survivre dans le désert grâce à ses immenses oreilles.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Lorsqu’il court, le guépard peut atteindre une vitesse maximale de 80 km/h.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Les cobras n’ont pas de prédateur connu ?", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ])
        ]),
        // Quiz 2
        new Quiz("Les serpents", [
            new Question("Un cobra royal peut injecter suffisamment de venin dans une morsure pour tuer 20 personnes (ou un éléphant).", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Comme les autres reptiles, les serpents ont le sang froid et leur température change en fonction de leur environnement.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Le plus gros boa est le boa constrictor.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ])
        ]),
        // Quiz 3
        new Quiz("Les pieuvres", [
            new Question("La plus petite pieuvre au monde mesure 30 cm de long.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("À l’âge adulte, la pieuvre a l’habitude de se reproduire tous les six mois.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("La pieuvre est daltonienne.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ])
        ])
    ], "https://img.freepik.com/vecteurs-libre/ensemble-animaux-sauvages_1308-28248.jpg"),
    //Three Category
    new Category("Sciences", [
        // Quiz 1
        new Quiz("les fusées", [
            new Question("La Saturn V est la fusée qui a propulsé Apollo 11 vers la Lune, en juillet 1969.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("La fusée Ariane est le véhicule de lancement de l’Agence spatiale européenne.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Le nom de la fusée qui a transporté l’acteur William Shatner, qui a incarné le capitaine Kirk, était l’Explorer 1.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ])
        ]),
        // Quiz 2
        new Quiz("Les icebergs", [
            new Question("Les plus gros icebergs proviennent de l’Arctique.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Les icebergs de l’hémisphère nord fondent généralement en six semaines.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Les plus gros icebergs sont des icebergs tabulaires.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ])
        ]),
        // Quiz 3
        new Quiz("Les tornades", [
            new Question("Certaines tornades peuvent être bleu foncé.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Une tornade qui se forme sur l’eau est qualifiée de cyclone.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Les tornades sont formées lorsqu’une masse d’air chaud s’enroule autour d’une masse d’air humide.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ])
        ])
    ], "https://lewebpedagogique.com/haudrafrancais/files/2020/09/science.png"),
    //4 Category
    new Category("Langue Française", [
        //Quiz 1
        new Quiz("Les pluriels", [
            new Question("Il n’y a pas de faute dans : « La grammaire ne peut s’apprendre sans efforts. ».", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("La phrase « ces Orientaux sont originals » ne contient pas de faute.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Il y a une faute dans « nous avons visité Paris à pieds ».", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ])
        ]),
        //Quiz 2
        new Quiz("Les expressions françaises", [
            new Question("«Dès potron-minet» veut dire aux toutes premières heures de la journée.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("«Bâtir des châteaux en Espagne» veut dire avoir des rêves irréalisables.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("L’expression «mi-figue mi-raisin» exprime un mélange d’attitudes, un avis mitigé.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ])
        ]),
        //Quiz 3
        new Quiz("La grammaire", [
            new Question("Dans la phrase suivante, l’attribut est « semblait » : « Avant son départ, Gontrand semblait surexcité. »", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("La phrase suivante est correcte : « Il va s’en dire que l’hiver sera difficile cette année. »", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("La phrase suivante est fautive : « Je m’entraîne à tous les matins. »", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ])
        ])
    ], "https://images.ctfassets.net/jr2kttyjrxby/1X56ChsY5wCOXva2kCrt58/83a0b64371681aa6d0230a426187dc38/combien-mots-langue-francaise.jpg"),
    //5 Category
    new Category("Géographie", [
        //Quiz 1
        new Quiz("new York", [
            new Question("New York City était à l’origine un poste de traite fondé par les Britanniques.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("New York est la deuxième  ville la plus peuplée d’Amérique du Nord après Los Angeles.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Le rivage de New York s’érode constamment, en raison de l’eau salée de l’océan.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ])
        ]),
        //Quiz 2
        new Quiz("Les capitales européennes", [
            new Question("Oslo, en Norvège, est réputée pour ses parcs.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("La City de Londres, en Angleterre, est la plus petite ville du pays, même si elle en est la capitale.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Birgu, surnommée la Victorieuse, est la capitale de Malte. Elle a une population d’environ 2 500 habitants.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ])
        ]),
        //Quiz 3
        new Quiz("L’Espagne", [
            new Question("Ce pays est un des plus boisés d’Europe.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Madrid a toujours été la capitale de l’Espagne, car cette ville se trouve au centre du pays.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("L’Espagne abrite une imposante cordillère, les Pyrénées.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ])
        ])
    ], "https://grip-editions.fr/assets/uploads/images/couvertures/geographie.jpg"),
    //6 Category
    new Category("Arts et culture", [
        // Quiz 1
        new Quiz("Le trône de fer", [
            new Question("Daeron Ier a fondé la dynastie des Targaryen et a conquis Westeros pour en devenir le roi.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Ser Symon Hollard est le plus vieux membre encore vivant de la Maison Hollard.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Lorsque Jon Snow s’est joint à la Garde de nuit, ser Alliser Thorne en était le Premier patrouilleur.", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ])
        ]),
        // Quiz 2
        new Quiz("Comics aléatoire", [
            new Question("Le premier héros à avoir eu la capacité de voler est Superman. ", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Il existe une série Spider-Man du nom de Supaidāman.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ]),
            new Question("Heroes Reborn est une série de comics Marvel où la Justice League doit défendre le monde contre Thanos et d’autres méchants.  ", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ])
        ]),
        // Quiz 3
        new Quiz("Le Marvel Cinematic Universe", [
            new Question("Loki est un Dieu. ", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Wanda et son frère Pietro sont originaire de Russie. ", [
                new Response("Vrai", false),
                new Response("Faux", true),
            ]),
            new Question("Clint Barton, alias Hawkeye, est handicapé.", [
                new Response("Vrai", true),
                new Response("Faux", false),
            ])
        ])
    ], "https://img.freepik.com/vecteurs-libre/art-culture-icons-set_1284-14809.jpg"),
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
        Quizz(card.getAttribute('id'));
        // startQuiz(card.getAttribute('id'));
    })
})

function Quizz(idCategory: string | null) {
    let ElementCategories = document.querySelector(".cards-list");
    // let categoriesId = document.querySelector(".card");
    ElementCategories?.setAttribute('style', 'display:none');
    let ElementTitleCategories = document.querySelector(".title");
    ElementTitleCategories.innerHTML = "Veuillez sélectionner un quizz";
    categories.forEach((category) => {
        if (idCategory === category.name) {
            category.quizzes.forEach((quiz, index = 0) => {
                createElementQuizz(quiz, index);
                index++;
            })
        }
    })

    let quizzes = document.querySelectorAll(".quiz");

    quizzes.forEach((quiz) => {
    quiz.addEventListener("click", () => {
        startQuiz(idCategory, quiz.getAttribute('id'));
    })
})

}

function createElementQuizz(quiz: any, index:any) {
    let elementCategory = createElementQuiz(quiz, index);

    let cardsList = document.querySelector(".listQuiz");
    cardsList?.appendChild(elementCategory);
}

function startQuiz(id: any | null, index:any) {
    categories.forEach((category) => {
        if (category.name === id) {
            let cardsList = document.querySelector(".listQuiz");
            cardsList?.setAttribute('style', "display:none");
            let titleCategory = document.querySelector(".title");
            titleCategory?.setAttribute('style', "display:none");
            let startCard = document.querySelector(".start");
            startCard?.setAttribute('style', "");

            let startNumberQuestions = document.querySelector("#startCard");

            let createImg = document.createElement("img");
            createImg.setAttribute("class", "imgQuiz");
            createImg.setAttribute("src", category.quizzes[index].image);
            startNumberQuestions.appendChild(createImg);
            startNumberQuestions?.appendChild(startElement(category.quizzes[index].questions, category));

            const startBtn = document.querySelector("[data-start-btn]");

            startBtn?.addEventListener("click", () => {
                let questionNumber = 0;

                let countCorrectAnswers = 0;

                let cardQuestion = document.querySelector("#questionCard");
                cardQuestion?.setAttribute("style", "");

                let cardStartQuizz = document.querySelector(".start");
                cardStartQuizz?.setAttribute("style", "display:none;");

                createElementQuestion(category.quizzes[index].questions, questionNumber, countCorrectAnswers);

                //createElementQuestion(category);
            });
        }
    });
}

function startElement(questions, category) {
    console.log(category);
    
    let createP = document.createElement("p");
    createP.setAttribute("class", "description");
    createP.appendChild(
        document.createTextNode(
            "Il sera composé de " + questions.length + " questions (Thème : " + category.name + ")"
        )
    );

    return createP;
}

function createElementQuestion(questions: any, questionNumber: any, countCorrectAnswers: any) {
    let question = questions[questionNumber];
    let divQuestionTitle = document.querySelector("#questionPage");
    divQuestionTitle?.prepend(createQuestionTitle(question.name));

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
    const responsesBtn = document.querySelectorAll(".answer");

    responsesBtn.forEach((responseBtn) => {
        responseBtn.addEventListener("click", () => {
            question.answers.forEach((reponseCorrect) => {
                if (reponseCorrect.name == responseBtn.textContent) {
                    if (reponseCorrect.correct == true) {
                        responseBtn.setAttribute("class", "answer correct");
                        countCorrectAnswers = getNumberOfCorrectAnswers(countCorrectAnswers);
                    } else {
                        responseBtn.setAttribute("class", "answer wrong");
                    }
                }
            })
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

function createElementQuiz(quiz: any, index:any) {
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
