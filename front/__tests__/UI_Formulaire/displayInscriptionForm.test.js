import { UI_Formulaire } from "../../js/classes/ui/UI_Formulaire";

describe('displayInscriptionForm test', () => {
    let uiForm;

    beforeEach(() => {
        document.body.innerHTML = '<div class="formulaire__main"></div>';
        uiForm = new UI_Formulaire();
    });

    it('should display the form in the body', () => {
        uiForm.displayInscriptionForm();

        const formContainer = document.querySelector('.formulaire__main');
        expect(formContainer).not.toBeNull();

        // Vérifier la présence des éléments clés
        expect(formContainer.querySelector('#signUpForm')).not.toBeNull();
        expect(formContainer.querySelector('h2').textContent).toBe('Inscription');
        expect(formContainer.querySelector('#signUpForm-name')).not.toBeNull();
        expect(formContainer.querySelector('#signUpForm-email')).not.toBeNull();
        expect(formContainer.querySelector('#signUpForm-password')).not.toBeNull();
        expect(formContainer.querySelector('.btn-submit').textContent).toBe('Send');
        expect(formContainer.querySelector('.regexPassword')).not.toBeNull();
    });

    afterEach(() => {
        document.body.innerHTML = "";
    });
});
