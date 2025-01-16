
export class CtrlHome {
    constructor(uiStyle, ctrlHeader, uiBooks, booksApi, mdPagination, uiPagination) {
        this.uiStyle = uiStyle;
        this.ctrlHeader = ctrlHeader;
        this.uiBooks = uiBooks;
        this.booksApi = booksApi;
        this.mdPagination = mdPagination;
        this.uiPagination = uiPagination;
        this.books = [];
        this.query = "";
        this.init();
    }

    async init() {
        await this.fetchBooks();
        this.displayBooks();
        this.displayPagination(this.query);
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener("click", this.handleClicks.bind(this));
    }

    handleClicks(e) {
        if (e.target.classList.contains("goLeft")) {
            this.handleLeftClick();
        } else if (e.target.classList.contains("goRight")) {
            this.handleRightClick();
        }
    }

    handleLeftClick() {
        this.mdPagination.setPreviousPage();
        const currentPage = this.mdPagination.getCurrentPage();
        window.location.href = `http://127.0.0.1:5500/front/index.html?q=${this.query}&page=${currentPage}`;
    }

    handleRightClick() {
        this.mdPagination.setNextPage();
        const currentPage = this.mdPagination.getCurrentPage();
        window.location.href = `http://127.0.0.1:5500/front/index.html?q=${this.query}&page=${currentPage}`;
    }

    async fetchBooks() {
        const currentPage = this.getCurrentpage();
        const currentPageIndex = currentPage - 1;
        const startIndex = currentPageIndex * 40;
        const str = window.location.href;
        const url = new URL(str);
        this.query = url.searchParams.get("q") || "fantasy";
        const books = await this.booksApi.getBooks(startIndex, 40, this.query);
        this.books = books;
    }


    displayBooks() {
        this.uiBooks.displayBooks(this.books);
    }

    getCurrentpage() {
        const str = window.location.href;
        const url = new URL(str);
        const currentPage = url.searchParams.get("page");
        if (currentPage) {
            return parseInt(currentPage, 10);
        } else {
            return 1;
        }
    }

    displayPagination(query) {
        const totalItems = this.books.totalItems;
        const currentPage = this.getCurrentpage();
        this.mdPagination.setNewVariables(totalItems, 40, currentPage);
        const pageRange = this.mdPagination.getPageRange();
        try {
            this.uiPagination.displayPagination(pageRange, currentPage, query);
        } catch (err) {
            console.error(err);
        }
    }

}