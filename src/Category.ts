import Quiz from './Quiz';

export default class Category {
    name: string;
    quizzes: Array<Quiz>;
    image: string;


    constructor(name: string, quizzes: Array<Quiz>, image: string) {
        this.name = name;
        this.quizzes = quizzes;
        this.image = image;
    }

// Création de l'élement category, il permet de générer le html
    createElementCategory(category: any) {
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

}