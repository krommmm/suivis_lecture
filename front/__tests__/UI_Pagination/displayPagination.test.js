import { UI_Pagination } from "../../js/classes/ui/UI_Pagination";

describe('displayPagination method',()=>{

    beforeEach(()=>{
        document.body.innerHTML = `<div class="panination__container--numeros"></div>`;
    });

    it('should',()=>{
        const uiPagination = new UI_Pagination();
        uiPagination.displayPagination(4,5,"coucou");
        const container = document.querySelector(".panination__container--numeros");
        const lastElement = container.querySelector(".")

        expect()
    });

    afterEach(()=>{
        document.body.innerHTML = "";
    })
});