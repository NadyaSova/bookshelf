const rp = require('request-promise');

export default class BookService {

    _optionsBase = {
        headers: { 'User-Agent': 'Request-Promise' },
        json: true
    };

    _urlBase = 'https://www.googleapis.com/books/v1/';

    _transformBook(item) {
        const vi = item.volumeInfo;
        if (!vi.imageLinks)
            vi.imageLinks = {};

        const authors = vi.authors ? vi.authors.reduce((prev, cur) => { return prev + ', ' + cur }) : '';

        return {
            id: item.id,
            authors,
            title: vi.title,
            pageCount: vi.pageCount,
            img: vi.imageLinks.thumbnail
        };
    };

    async getResource(url) {
        return await rp({ ...this._optionsBase, uri: `${this._urlBase}${url}` });
    };

    async getBooks(term) {
        const uri = `volumes?q=${term}`;
        return this.getResource(uri).then((res) => {
            return res.items.map(this._transformBook);
        });
    };
}