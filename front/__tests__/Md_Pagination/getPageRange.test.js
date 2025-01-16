import { Md_Pagination } from "../../js/classes/models/Md_Pagination";

// describe('getPageRange method', () => {
//     it('should return an array composed by a range page', () => {
//         const totalItems = 500;
//         const currentPage = 18;
//         const itemsPerPage = 40;
//         const end = Math.ceil(totalItems / itemsPerPage);
//         const mdPagination = new Md_Pagination(totalItems, currentPage, itemsPerPage);

//         const result = mdPagination.getPageRange(8);
//         const expectedResult = [1, "...", 14, 15, 16, 17, 18, 19, 20, 21, "...", end];

//         expect(result).toEqual(expectedResult);
//     });
// });

describe('Md_Pagination', () => {
    describe('getPageRange method', () => {
        it('should return correct range for middle pages', () => {
            const pagination = new Md_Pagination(1000, 18, 40);
            const result = pagination.getPageRange(8);
            expect(result).toEqual([1, '...', 14, 15, 16, 17, 18, 19, 20, 21, 22, '...', 25]);
        });

        it('should return correct range for first pages', () => {
            const pagination = new Md_Pagination(500, 1, 40);
            const result = pagination.getPageRange(8);
            expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, '...', 13]);
        });

          it('should return correct range for last pages', () => {
            const pagination = new Md_Pagination(500, 13, 40);
            const result = pagination.getPageRange(8);
            expect(result).toEqual([1, '...',5, 6, 7, 8, 9, 10, 11, 12, 13]);
          });

        it('should handle case when total pages is less than range size', () => {
            const pagination = new Md_Pagination(200, 3, 40);
            const result = pagination.getPageRange(8);
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });

          it('should handle case with custom different rangeSize & maxResult', () => {
            const pagination = new Md_Pagination(1000, 10, 20);
            const result = pagination.getPageRange(4);
            expect(result).toEqual([1, '...', 8, 9, 10, 11, 12, '...', 50]);
          });
    });
});