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
       // this.displayPagination(books);
    }

    // displayPagination(books) {
    //     const booksLength = books.totalItems;
    //     const nbPages = Math.round(booksLength / 40);
    //     const paginationContainerNum = document.querySelector(".panination__container--numeros");
    //     // creer max 10 + dernier(11ème) + < & > 
    //     paginationContainerNum.innerHTML = "";

    //     for (let i = 0; i < 11; i++) {
    //         let page = i + 1;
    //         const a = document.createElement("a");
    //         const square = document.createElement("div");
    //         square.className = "pagination__container--square";

    //         if (i == 10) {
    //             square.textContent = nbPages;
    //             square.setAttribute("data-id", nbPages);
    //             page = nbPages;
    //         } else if (i == 9) {
    //             square.textContent = "...";
    //             square.className="pagination__container--tempo";
    //         } else {
    //             square.textContent = i + 1;
    //             square.setAttribute("data-id", i);
    //         }
    //         a.setAttribute("href", `http://127.0.0.1:5500/front/index.html?q=fantastique&page=${page}`);
    //         a.appendChild(square);
    //         paginationContainerNum.appendChild(a);
    //     };
    // }

    displayBookLength(books) {
        const bookLength = books.totalItems;
        const $bookLengthEl = document.querySelector(".filter__container__bookLength");
        $bookLengthEl.textContent = `${bookLength} livres`;
    }

    createBookSheet(book, elementContainer) {
        const bookSheet = document.createElement("div");
        bookSheet.className = "books__container__sheet";

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