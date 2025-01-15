export class CtrlHeader {
    constructor(uiStyle, uiBooks, booksApi) {
        this.uiStyle = uiStyle;
        this.uiBooks = uiBooks;
        this.booksApi = booksApi;
        this.searchBarForm = document.getElementById("header-searchBar");
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener("click", this.handleClicks.bind(this));
        this.searchBarForm.addEventListener("submit", this.handleSubmit.bind(this));
    }

    handleClicks(e) {
        if (e.target.classList.contains("headerContainer__profil--img")) {
            this.handleProfil();
        } else if (e.target.classList.contains("exitProfilMenu")) {
            this.handleProfil();
        }
    }

    handleSubmit(e) {
        if (e.target.id === "header-searchBar") {
            e.preventDefault();
            const researchedValue = e.target.querySelector(".headerContainer__searchBar__container--searchBar").value;
            this.handlePage(researchedValue);
            this.displayBooks(researchedValue);
        }
    }

    handlePage(researchedValue){
        const page = document.querySelector(".books__container");
        if(!page){
            window.location.href=`/front/index.html?q=${researchedValue}`;
        }
    }

    async displayBooks(query) {
        const books = await this.booksApi.getBooks(0,40,query);
        this.uiBooks.displayBooks(books);
    }

    handleProfil() {
        this.uiStyle.displayOrHide(".headerContainer__profil__menu");
    }


}