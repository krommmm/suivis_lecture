export class UI_Style {
    constructor() {

    }

    displayOrHide(className) {
        const elem = document.querySelector(className);
        if (elem) {
            elem.style.display = (elem.style.display === "none" || elem.style.display === "") ? "flex" : "none";
        } 
    }
}