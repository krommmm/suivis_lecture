import { UI_Formulaire } from "../../js/classes/ui/UI_Formulaire";

describe('displayConnexionForm test', () => {
    let uiForm;

    beforeEach(() => {
        document.body.innerHTML = `<div class="formulaire__main"></div>`;
        uiForm = new UI_Formulaire();
    });

    it('should display the form', () => {
        uiForm.displayConnexionForm();
        const formContainer = document.querySelector(".formulaire__main");

        const result1 = formContainer.querySelector('#loginForm');
        const result2 = formContainer.querySelector('h2').textContent;
        const result3 = formContainer.querySelector('#loginForm-email');
        const result4 = formContainer.querySelector('#loginForm-password');

        expect(result1).not.toBe(null);
        expect(result2).toBe("Connection");
        expect(result3).not.toBe(null);
        expect(result4).not.toBeNull();

    });

    afterEach(() => {
        document.body.innerHTML = "";
    });
});