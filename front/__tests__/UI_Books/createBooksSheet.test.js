import { UI_Books } from "../../js/classes/ui/UI_Books";

describe('CreateBooksSheet method', () => {
    let mockBooks;
    let uiBook;


    beforeEach(() => {
        uiBook = new UI_Books();
        const elementContainer = document.createElement("div");
        elementContainer.className = "books__container";
        document.body.appendChild(elementContainer);

        mockBooks = {
            items: [
                {
                    kind: "books#volume", id: "B7IsDwAAQBAJ",
                    volumeInfo: {
                        title: "Rêves de glace",
                        authors: ['kelly St. Clare'],
                        categories: ["Fiction"],
                        description: "description de ...",
                        imageLinks: {
                            thumbnail: "http://books.google.com/books/content?id=B7IsDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                        },

                    }
                }
            ]
        };
    });



    it('should have the title from the object in the element ', () => {

        const $containerEl = document.querySelector(".books__container");

        uiBook.createBookSheet(mockBooks.items[0], $containerEl);
        const $titleEl = $containerEl.querySelector(".books__container__sheet__main--title");

        expect($titleEl.textContent).toBe("Rêves de glace");
        expect($titleEl.textContent).not.toBe("sdfoisdhf");
    });

    afterEach(() => {
        document.body.innerHTML = "";
    });
});