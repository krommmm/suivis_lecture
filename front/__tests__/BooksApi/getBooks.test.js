import { BooksApi } from "../../js/classes/services/BooksApi";

describe('call api get',()=>{

    beforeEach(()=>{
        globalThis.fetch = vi.fn();
    });

    it('should returns the data',async ()=>{
        const successResponse = {
            items:[{title:'test books'}]
        }

        fetch.mockResolvedValue({
            json:()=> Promise.resolve(successResponse),
        });

        const booksApi = new BooksApi();
        const result = await booksApi.getBooks(0,10,"javascript");

        expect(result).toEqual(successResponse);
        // getBooks(startIndex, maxResults, query)
    });


});

// ou 


describe('getBooks method', () => {
    it('calls fetch with correct URL', async () => {
      const instance = new BooksApi()
      
      // Mock global fetch
      global.fetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ items: [] })
      })
  
      await instance.getBooks(0, 10, 'javascript')
  
      // Vérifier que fetch a été appelé avec l'URL correcte
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('https://www.googleapis.com/books/v1/volumes?q=javascript')
      )
    })
  
    it('returns books data', async () => {
      const instance = new BooksApi()
      const mockData = { items: [{ title: 'Test Book' }] }
      
      global.fetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve(mockData)
      })
  
      const result = await instance.getBooks(0, 10, 'javascript')
      
      expect(result).toEqual(mockData)
    })
  })