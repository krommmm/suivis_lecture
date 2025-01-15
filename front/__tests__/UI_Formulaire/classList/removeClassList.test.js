import { UI_Formulaire } from "../../../js/classes/ui/UI_Formulaire";

describe('removeClassList methods', () => {

    let para;
    let uiForm;

    beforeEach(() => {
        const paraContainer = document.createElement("div");
        paraContainer.id = "paraContainer";
        para = document.createElement("para");
        para.id = "para-true";
        para.className = "true";
        paraContainer.appendChild(para);
        document.body.appendChild(paraContainer);

        uiForm = new UI_Formulaire();
    });


    it('should change the element className', () => {

        let paraSearched = document.querySelector("#para-true");
        uiForm.removeClassList(paraSearched);
        expect(paraSearched.className).toBe('false');
        expect(paraSearched.className).not.toBe('true');
    });

    afterEach(() => {
        document.body.innerHTML = "";
    });
});