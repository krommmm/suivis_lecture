import { Md_Formulaire } from "../../js/classes/models/Md_Formulaire";


describe('Connection method', () => {

    let form;
    beforeEach(() => {
        form = document.createElement("form");
        form.id = "loginForm";

        const formField = [
            { name: "email", value: "joe@gmx.fr" },
            { name: "password", value: "Password1234434@" }
        ];

        formField.forEach((cell) => {
            const input = document.createElement("input");
            input.id = `loginForm-${cell.name}`;
            input.name = cell.name;
            input.value = cell.value;
            form.appendChild(input);
        });

        document.body.appendChild(form);


    });

    it('should yield the object of a user', () => {
        const mdForm = new Md_Formulaire();
        const result = mdForm.handleConnection(form);
        const expectedResult = {
            email: "joe@gmx.fr",
            password: "Password1234434@"
        };
        expect(result).toEqual(expectedResult); 
    });

    afterEach(()=>{
        document.body.innerHTML = ""; 
    });


});
