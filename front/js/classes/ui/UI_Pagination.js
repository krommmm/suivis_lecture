export class UI_Pagination {
    constructor() {

    } 

    displayPagination(pageRange, currentPage, query = "coucou") {
        const paginationContainerNum = document.querySelector(".panination__container--numeros");
        paginationContainerNum.innerHTML = "";

        for (let i = 0; i < pageRange.length; i++) {
            const a = document.createElement("a");
            const square = document.createElement("div");
            square.className = "pagination__container--square";
            square.textContent = pageRange[i];
            if (pageRange[i] !== "...") square.setAttribute("data-id", pageRange[i]);
            if (pageRange[i] === currentPage) square.classList.add("pageSelected");
            if (pageRange[i] !== "...") a.setAttribute("href", `http://127.0.0.1:5500/front/index.html?q=${query}&page=${pageRange[i]}`);
            a.appendChild(square);
            paginationContainerNum.appendChild(a);
        };
    }
}