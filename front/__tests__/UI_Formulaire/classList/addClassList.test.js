import { UI_Formulaire } from "../../../js/classes/ui/UI_Formulaire";

describe('addClassList methods', () => {

    let para;
    let uiForm;

    beforeEach(() => {
        const paraContainer = document.createElement("div");
        paraContainer.id = "paraContainer";
        para = document.createElement("p");
        para.id = "para-false";
        para.className = "false";
        paraContainer.appendChild(para);
        document.body.appendChild(paraContainer);

       uiForm =  new UI_Formulaire();
    });


    it('should change the element className', () => {
        let paraSearched = document.querySelector("#para-false");
        uiForm.addClassList(paraSearched);
        expect(paraSearched.className).toBe('true');
        expect(paraSearched.className).not.toBe('false');
    });

    afterEach(()=>{
        document.body.innerHTML = "";
    });
});