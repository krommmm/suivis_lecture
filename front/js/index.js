import { CtrlHeader } from "./classes/controllers/CtrlHeader.js";
import { CtrlFormulaire } from "./classes/controllers/CtrlFormulaire.js";
import { UI_Formulaire } from "./classes/ui/UI_Formulaire.js";
import { Md_Formulaire } from "./classes/models/Md_Formulaire.js"
import { UI_Style } from "./classes/ui/UI_Styles.js";
import { CtrlHome } from "./classes/controllers/CtrlHome.js";
import { BooksApi } from "./classes/services/BooksApi.js";
import { UI_Books } from "./classes/ui/UI_Books.js";
import { Md_Pagination } from "./classes/models/Md_Pagination.js";
import { UI_Pagination } from "./classes/ui/UI_Pagination.js";

const uiForm = new UI_Formulaire();
const mdForm = new Md_Formulaire();
const uiStyle = new UI_Style();
const uiBooks = new UI_Books();
const booksApi = new BooksApi();
const ctrlHeader = new CtrlHeader(uiStyle, uiBooks, booksApi);
const mdPagination = new Md_Pagination();
const uiPagination = new UI_Pagination();


const url = window.location.href;
const urlPageArr = url.split("/");
const pageName = urlPageArr[urlPageArr.length - 1].replace(".html", "");

switch (pageName) {
    case "index":
        new CtrlHome(uiStyle, ctrlHeader, uiBooks, booksApi, mdPagination, uiPagination);
        break;

    case "formulaire":
        new CtrlFormulaire(mdForm, uiForm, ctrlHeader);
        break;

    default: new CtrlHome(uiStyle, ctrlHeader, uiBooks, booksApi, mdPagination, uiPagination);
}

