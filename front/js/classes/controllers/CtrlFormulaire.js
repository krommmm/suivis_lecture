export class CtrlFormulaire {
    constructor(Md_Formulaire, UI_Formulaire, ctrlHeader) {
        this.Md_Formulaire = Md_Formulaire;
        this.UI_Formulaire = UI_Formulaire;
        this.ctrlHeader = ctrlHeader;
        this.formState = false;
        this.UI_Formulaire.displayConnexionForm();
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener("click", this.handleClicks.bind(this));
        document.addEventListener("submit", this.handleSubmit.bind(this));
        document.addEventListener("input", this.handleInput.bind(this));
    }

    handleClicks(e) {
        if (e.target.classList.contains("href_formulaire")) {
            this.formState = this.Md_Formulaire.switchForm();
            this.formState ? this.UI_Formulaire.displayInscriptionForm() : this.UI_Formulaire.displayConnexionForm();
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (e.target.closest("FORM").id === "signUpForm") {
            this.handleInscription(e);
        } else if (e.target.closest("FORM").id === "loginForm") {
            this.handleConnection(e);
        }
    }

    handleInput(e) {
        if (e.target.closest("form").id === "signUpForm") {
            this.handleRegex(e);
        }
    }

    handleRegex(e) {
        const formId = e.target.closest('FORM').id;
        const input = e.target;
        const isRegexRespected = this.Md_Formulaire.handleRegex(formId, input);
        this.UI_Formulaire.displayCharRespected(isRegexRespected);
    }

    handleInscription(e) {
        e.preventDefault();
        const form = e.target;
        const dataInscription = this.Md_Formulaire.handleInscription(form);
        console.log(dataInscription);
    }

    handleConnection(e) {
        e.preventDefault();
        const form = e.target;
        const dataConnection = this.Md_Formulaire.handleConnection(form);
        console.log(dataConnection);
    }
}
