import { Md_Pagination } from "../models/Md_Pagination.js";
import { UI_Pagination } from "../ui/UI_Pagination.js";

export class CtrlHome {
    constructor(uiStyle, ctrlHeader, uiBooks, booksApi) {
        this.uiStyle = uiStyle;
        this.ctrlHeader = ctrlHeader;
        this.uiBooks = uiBooks;
        this.booksApi = booksApi;
        this.books = [];
        this.query = "fantasy";
        this.init();
    }

    async init() {
        await this.fetchBooks();
        this.displayBooks();
        this.displayPagination(this.books);
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener("click", this.handleClicks.bind(this));
    }

    handleClicks(e) {

    }

    async fetchBooks() {
        const str = window.location.href;
        const url = new URL(str);
        this.query = url.searchParams.get("q");
        const books = await this.booksApi.getBooks(0, 40, this.query);
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

    displayPagination() {
        const totalItems = this.books.totalItems; // 777 soit 20 pages
        const currentPage = this.getCurrentpage(); // 9

        const pageRange = new Md_Pagination(totalItems, currentPage).getPageRange();
        new UI_Pagination().displayPagination(pageRange, currentPage);
    }



}