export class CtrlFocus {
    constructor(ctrlHeader, booksApi, uiFocus) {
        this.ctrlHeader = ctrlHeader;
        this.booksApi = booksApi;
        this.uiFocus = uiFocus;
        this.book = [];
        this.init();
    }

    async init() {
        await this.getBook();
        this.displayBook();
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener("click", this.handleClicks.bind(this));
    }

    handleClicks(e) {
    }

    async getBook() {
        const bookId = this.getBookId();
        this.book = await this.getBookItem(bookId);
    }

    getBookId() {
        const str = window.location.href;
        const url = new URL(str);
        const bookId = url.searchParams.get("bookid");
        return bookId;
    }

    async getBookItem(bookId) {
        const book = await this.booksApi.getBook(bookId);
        return book;
    }

    displayBook(){
        this.uiFocus.displayBook(this.book);
    }

}