export class Md_Pagination {
    constructor() {
        this.totalItems = 0;
        this.itemsPerPage = 40;
        this.currentPage = 1;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    }

    getCurrentPage() {
        return this.currentPage;
    }

    setPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }
    setNextPage(){
        if(this.currentPage < this.totalPages){
            this.currentPage++;
        }
    }

    setNewVariables(totalItems, itemsPerPage, currentPage) {
        this.totalItems = totalItems;
        this.itemsPerpage = itemsPerPage;
        this.currentPage = currentPage;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    }

    getNextPage() {
        if (this.currentPage < (Math.ceil(this.totalItems / this.itemsPerPage))) {
            this.currentPage++;
        }
    }

    getPageRange(rangeSize = 8) {

        const half = Math.floor(rangeSize / 2);
        let start = Math.max(1, this.currentPage - Math.floor(half));
        let end = this.currentPage + half;

        if (this.currentPage + half > this.totalPages) {
            end = this.totalPages;
            const diff = this.currentPage + half - this.totalPages;
            start = Math.max(1, start - diff);
        } else if (this.currentPage - half < start) {
            const diff = half - this.currentPage;
            end = end + diff;
        }

        const rangeArr = [];

        for (let i = start; i < end + 1; i++) {
            rangeArr.push(i);
        }
        if (start !== 1) {
            // creation de : 1 ...
            rangeArr.unshift(1);
            if (start > 2) rangeArr.splice(1, 0, '...');
        }
        if (end !== this.totalPages) {
            // creation de : ... totalPages
            if (end < this.totalPages - 1) rangeArr.push('...');
            rangeArr.push(this.totalPages);
        }

        return rangeArr;

    }




}