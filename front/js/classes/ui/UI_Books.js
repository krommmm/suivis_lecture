export class UI_Books {
    constructor() {
        this.booksContainer = document.querySelector(".books__container");
    }


    displayBooks(books) {
        this.booksContainer.innerHTML = "";
        books.items.forEach((item) => {
            this.createBookSheet(item, this.booksContainer);
        });
        this.displayBookLength(books);
    }

    displayBookLength(books) {
        const bookLength = books.totalItems;
        const $bookLengthEl = document.querySelector(".filter__container__bookLength");
        $bookLengthEl.textContent = `${bookLength} livres`;
    }

    createBookSheet(book, elementContainer) {
        const bookSheet = document.createElement("div");
        bookSheet.className = "books__container__sheet";
        bookSheet.setAttribute("data-id", book.id);

        // head
        const bookSheetHead = document.createElement("div");
        bookSheetHead.className = "books__container__sheet__header";
        const img = document.createElement("img");
        if (book.volumeInfo.imageLinks) {
            img.src = `${book.volumeInfo.imageLinks.thumbnail}`;
        } else {
            img.src = "/front/assets/pictures/exSheet/noImgBook.jpg";
        }
        bookSheetHead.appendChild(img);
        bookSheet.appendChild(bookSheetHead);

        // main
        const bookSheetMain = document.createElement("div");
        bookSheetMain.className = "bookSheetMain";
        const bookSheetTitle = document.createElement("p");
        bookSheetTitle.className = "books__container__sheet__main--title";
        bookSheetTitle.textContent = `${book.volumeInfo.title}`;
        const bookSheetStar = document.createElement("div");
        bookSheetStar.className = "books__container__sheet__main--stars";
        const starsIcon = document.createElement("i");
        starsIcon.className = "fa-regular fa-star";
        bookSheetMain.appendChild(bookSheetTitle);
        bookSheetStar.appendChild(starsIcon);
        bookSheetMain.appendChild(bookSheetStar);
        bookSheet.appendChild(bookSheetMain);

        // foot
        const bookSheetFooter = document.createElement("div");
        bookSheetFooter.className = "books__container__sheet__footer";
        const bookSheetFooterAuthor = document.createElement("p");
        if (book.volumeInfo.authors) {
            bookSheetFooterAuthor.textContent = `${book.volumeInfo.authors}`;
        } else {
            bookSheetFooterAuthor.textContent = `Auteur inconnu`;
        }
        bookSheetFooter.appendChild(bookSheetFooterAuthor);
        bookSheet.appendChild(bookSheetFooter);

        elementContainer.appendChild(bookSheet);
    }
}