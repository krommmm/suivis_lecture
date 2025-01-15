import { Md_Formulaire } from "../../js/classes/models/Md_Formulaire";


describe('Inscription method', () => {

    let form;
    beforeEach(() => {
        form = document.createElement("form");
        form.id = "signUpForm";

        const formField = [
            { name: "name", value: "joe" },
            { name: "email", value: "joe@gmx.fr" },
            { name: "password", value: "Password1234434@" }
        ];

        formField.forEach((cell) => {
            const input = document.createElement("input");
            input.id = `signUpForm-${cell.name}`;
            input.name = cell.name;
            input.value = cell.value;
            form.appendChild(input);
        });

        document.body.appendChild(form);


    });

    it('should yield the object of a user', () => {
        const mdForm = new Md_Formulaire();
        const result = mdForm.handleInscription(form);
        const expectedResult = {
            name: "joe",
            email: "joe@gmx.fr",
            password: "Password1234434@"
        };
        expect(result).toEqual(expectedResult); // not toBe car c'est un objet donc pas la même ref
    });

    afterEach(()=>{
        document.body.innerHTML = ""; // on efface le document.body.innerHTML après chaque test
    });


});
