export class BooksApi {
    constructor() {

    }

    async getBooks(startIndex, maxResults, query) {
        const apiKey = 'AIzaSyA0tOyJymKqr4mBFP6fNOFaQga52nnY4fU';
        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=${maxResults}&startIndex=${startIndex}`;
        try {
            const preRes = await fetch(url);
            const res = await preRes.json();
            return res;
        } catch (err) {
            return err;
        }
    }
}