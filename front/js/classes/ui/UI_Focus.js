export class UI_Focus {
    constructor() {
        this.focusContainer = document.querySelector(".focus__container");
    }

    displayBook(book) {
        //img
        const imgContainer = document.querySelector(".focus__container__header__img");
        const img = document.createElement("img");
        img.src = `https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w260-h430&source=gbs_api`;
        
        imgContainer.appendChild(img);

        const presentation = document.querySelector(".focus__container__header__presentation__principal");
        //titre
        const title = document.createElement("p");
        title.className = "focus__container__header__presentation__principal--title";
        title.textContent = book.volumeInfo.title;
        presentation.appendChild(title);
        // auteur
        const auteur = document.createElement("p");
        auteur.className = "focus__container__header__presentation__principal--auteur";
        auteur.textContent = `De ${book.volumeInfo.authors[0]}`;
        presentation.appendChild(auteur);

        // tags
        const tagContainer = document.querySelector(".focus__container__header__presentation__tags");

        if (book.volumeInfo.publishers) {
            const tag = document.createElement("p");
            tag.className = "focus__container__header__presentation__tags--tag";
            tag.textContent = book.volumeInfo.publisher;
            tagContainer.appendChild(tag);
        }
        if (book.volumeInfo.publishedDate) {
            const tag = document.createElement("p");
            tag.className = "focus__container__header__presentation__tags--tag";
            tag.innerHTML = `<i class="fa-regular fa-calendar-days"></i> &nbsp;&nbsp;${book.volumeInfo.publishedDate}`;
            tagContainer.appendChild(tag);
        }
        if (book.volumeInfo.categories[0]) {
            const tag = document.createElement("p");
            tag.className = "focus__container__header__presentation__tags--tag";
            tag.innerHTML = `<i class="fa-solid fa-bookmark"></i> &nbsp;&nbsp;${book.volumeInfo.categories[0]}`;
            tagContainer.appendChild(tag);
        }


        //résumé
        const resumeContainer = document.querySelector(".focus__container__header__presentation__description");
        const resume = document.createElement("p");
        resume.className = "focus__container__header__presentation__description--resume";
        resume.textContent = "Résumé";
        const description = document.createElement("p");
        description.className = "focus__container__header__presentation__description--description";
        description.innerHTML = book.volumeInfo.description;

        resumeContainer.appendChild(resume);
        resumeContainer.appendChild(description);
    }
}