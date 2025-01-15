import { UI_Style } from "../../js/classes/ui/UI_Styles";

describe('displayOrHide method',()=>{
    
let uiStyle;

    beforeEach(()=>{
        const div = document.createElement("div");
        div.className="sampleDiv";
        div.style.display="flex";
        document.body.appendChild(div);

         uiStyle = new UI_Style();
    });

    it('should change display from "flex" to "none"',()=>{
        const $divEl = document.querySelector(".sampleDiv");

        const className = `.${$divEl.className}`;
        uiStyle.displayOrHide(className);

        expect($divEl.style.display).toBe("none");
    });

    it('should change display from "none" to "flex"',()=>{
        const $divEl = document.querySelector(".sampleDiv");
        $divEl.style.display="none";

        const className = `.${$divEl.className}`;
        uiStyle.displayOrHide(className);

        expect($divEl.style.display).toBe("flex");
    });

    it('should do nothing for non-existent elements', () => {
        uiStyle.displayOrHide(".nonExistentClass");
    });

    afterEach(()=>{
        document.body.innerHTML = "";
    });
}); 