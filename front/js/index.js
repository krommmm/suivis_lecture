import { CtrlHeader } from "./classes/controllers/CtrlHeader.js";
import { CtrlFormulaire } from "./classes/controllers/CtrlFormulaire.js";
import { UI_Formulaire } from "./classes/ui/UI_Formulaire.js";
import { Md_Formulaire } from "./classes/models/Md_Formulaire.js"
import { UI_Style } from "./classes/ui/UI_Styles.js";
import { CtrlHome } from "./classes/controllers/CtrlHome.js";
import { BooksApi } from "./classes/services/BooksApi.js";
import { UI_Books } from "./classes/ui/UI_Books.js";

const uiForm = new UI_Formulaire();
const mdForm = new Md_Formulaire();
const uiStyle = new UI_Style();
const uiBooks = new UI_Books();
const booksApi = new BooksApi();
const ctrlHeader = new CtrlHeader(uiStyle, uiBooks, booksApi);


const url = window.location.href;
const urlPageArr = url.split("/");
const pageName = urlPageArr[urlPageArr.length - 1].replace(".html", "");

switch (pageName) {
    case "index":
        new CtrlHome(uiStyle, ctrlHeader, uiBooks, booksApi);
        break;

    case "formulaire":
        new CtrlFormulaire(mdForm, uiForm, ctrlHeader);
        break;

    default: new CtrlHome(uiStyle, ctrlHeader, uiBooks, booksApi);
}

/*

const apiKey = 'AIzaSyA0tOyJymKqr4mBFP6fNOFaQga52nnY4fU'; // Remplacez par votre clé API
const query = `jurassic park`;
const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;
const urlFantasy = `https://www.googleapis.com/books/v1/volumes?q=fantasy&key=${apiKey}`;
const sfUrl = `https://www.googleapis.com/books/v1/volumes?q=science+fiction&key=${apiKey}`;
// const urlMax = `https://www.googleapis.com/books/v1/volumes?q=fantasy&key=${apiKey}&startIndex=0&maxResults=40`;
const maxResults = 40;
const startIndex = 0;
const urlMax = `https://www.googleapis.com/books/v1/volumes?q=fantasy&key=${apiKey}&maxResults=${maxResults}&startIndex=${startIndex}`;


(async () => {
    const preRes = await fetch(urlMax);
    const res = await preRes.json();
    const bookContainer = document.querySelector(".books__container");
    bookContainer.innerHTML = "";
    res.items.forEach((item) => {
        createBookSheet(item,bookContainer);
    });
})();

function createBookSheet(book, elementContainer) {
    const bookSheet = document.createElement("div");
    bookSheet.className = "books__container__sheet";

    // head
    const bookSheetHead = document.createElement("div");
    bookSheetHead.className = "books__container__sheet__header";
    const img = document.createElement("img");
    if(book.volumeInfo.imageLinks){
        img.src = `${book.volumeInfo.imageLinks.thumbnail}`;
    }else{
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
    if(book.volumeInfo.authors){
        bookSheetFooterAuthor.textContent = `${book.volumeInfo.authors}`;
    }else{
        bookSheetFooterAuthor.textContent = `Auteur inconnu`;
    }
    bookSheetFooter.appendChild(bookSheetFooterAuthor);
    bookSheet.appendChild(bookSheetFooter);

    elementContainer.appendChild(bookSheet);
}

*/
// query random : https://www.googleapis.com/books/v1/volumes?q=books

/*
 const apiKey = 'YOUR_API_KEY';
    const query = 'fantasy';
    const maxResults = 40; // Maximum possible par requête
    const startIndex = 0; // Index de départ pour la pagination
    const urlMax = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=${maxResults}&startIndex=${startIndex}`;
*/
