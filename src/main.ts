import Quiz from "./quiz";
import Category from "./category";
import Question from "./question";
import Answer  from "./answer";

//Créer catégories, quiz associés aux catégories, questions associées aux quiz, réponses associées aux questions
const Categorys = Array(
  new Category("Sport", "icon", "red", Array(
    new Quiz("Populaire", "img", Array(
      new Question("Quel est le sport le plus populaire au monde ?", "basketball", Array(
        new Answer("Football", false),
        new Answer("Basketball", true),
        new Answer("Tennis", false)
      )),
      new Question("Quel est le sport le plus populaire en France ?", "basketball", Array(
        new Answer("Football", true),
        new Answer("Basketball", false),
        new Answer("Tennis", false)
      )),
      new Question("Quel est le sport le plus populaire en Belgique ?", "basketball", Array(
        new Answer("Football", false),
        new Answer("Basketball", false),
        new Answer("Tennis", true)
      ))
    ))
  )),
  new Category("Jb Lavisse", "jblavisse", "blue", Array(
    new Quiz("Quiz fun", "jblavisse", Array(
      new Question("Quel est l'âge du capitaine", "jblavisse", Array(
        new Answer("42", true),
        new Answer("101", false),
        new Answer("18", false)
      )),
      new Question("Quelle est la différence entre un pigeon ?", "jblavisse", Array(
        new Answer("Glouuuuu", false),
        new Answer("Uh ?!", false),
        new Answer("La longueur des pattounes", true)
      )),
      new Question("Qu’est-ce qui est jaune et qui attend?", "jblavisse", Array(
        new Answer("Johnathan", true),
        new Answer("Homer Simpson", false),
        new Answer("Un citron pressé", false)
      ))
    ))
  ))
);

function demarrerQuiz() {
  // Afficher les catégories
  let chaineCategory = "";
  Categorys.forEach((Category, index) => {
    chaineCategory += `${index + 1}. ${Category.title}\n`;
  });
  let indexCategorySelectionnee = prompt(`Veuillez sélectionner une catégorie:\n${chaineCategory}`);

  // Afficher les quizzes dans la catégorie sélectionnée
  let CategorySelectionnee = Categorys[indexCategorySelectionnee - 1];
  let chaineQuiz = "";
  CategorySelectionnee.quizzes.forEach((quiz, index) => {
    chaineQuiz += `${index + 1}. ${quiz.title}\n`;
  });
  let indexQuizSelectionne = prompt(`Veuillez sélectionner un quiz:\n${chaineQuiz}`);

  // Démarrer le quiz
  let score = 0;
  let quizSelectionne = CategorySelectionnee.quizzes[indexQuizSelectionne - 1];
  quizSelectionne.questions.forEach((question) => {
    // Afficher la question
    alert(question.wording);

    // Afficher les réponses
    let chaineAnswer = "";
    question.Answers.forEach((Answer, index) => {
      chaineAnswer += `${index + 1}. ${Answer.content}\n`;
    });

    // Récupérer la réponse sélectionnée
    let indexAnswerSelectionnee = prompt(`Veuillez sélectionner une réponse:\n${chaineAnswer}`);
    let AnswerSelectionnee = question.Answers[indexAnswerSelectionnee - 1];

    // Mettre à jour le score
    if (AnswerSelectionnee.isCorrect) {
      score++;
    }
  });

  // Afficher le score final
  alert(`Vous avez obtenu ${score} points sur ${quizSelectionne.questions.length}`);
}

demarrerQuiz();