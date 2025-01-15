export class Md_Pagination {
    constructor(totalItems, currentPage = 1, itemsPerPage = 40) {
        this.totalItems = totalItems;
        this.itemsPerPage = itemsPerPage;
        this.currentPage = currentPage;
        this.totalPages = Math.ceil(totalItems / itemsPerPage);
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

        // cases des extrêmes
        // check si start = 1 et end = totalPages

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