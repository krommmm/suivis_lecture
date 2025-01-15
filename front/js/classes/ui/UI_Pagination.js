export class UI_Pagination {
    constructor() {

    }


    displayPagination(pageRange, currentPage) {
        const paginationContainerNum = document.querySelector(".panination__container--numeros");
        paginationContainerNum.innerHTML = "";

        for (let i = 0; i < pageRange.length; i++) {
            const a = document.createElement("a");
            const square = document.createElement("div");
            square.className = "pagination__container--square";
            square.textContent = pageRange[i];
            if (pageRange[i] !== "...") square.setAttribute("data-id", pageRange[i]);
            if (pageRange[i]===currentPage) square.classList.add("pageSelected");
            if (pageRange[i] !== "...") a.setAttribute("href", `http://127.0.0.1:5500/front/index.html?q=fantastique&page=${pageRange[i]}`);
            a.appendChild(square);
            paginationContainerNum.appendChild(a);
        };

        // for (let i = 0; i < 11; i++) {
        //     let page = i + 1;
        //     const a = document.createElement("a");
        //     const square = document.createElement("div");
        //     square.className = "pagination__container--square";

        //     if (i == 10) {
        //         square.textContent = nbPages;
        //         square.setAttribute("data-id", nbPages);
        //         page = nbPages;
        //     } else if (i == 9) {
        //         square.textContent = "...";
        //         square.className = "pagination__container--tempo";
        //     } else {
        //         square.textContent = i + 1;
        //         square.setAttribute("data-id", i);
        //     }
        //     a.setAttribute("href", `http://127.0.0.1:5500/front/index.html?q=fantastique&page=${page}`);
        //     a.appendChild(square);
        //     paginationContainerNum.appendChild(a);
        // };
    }
}