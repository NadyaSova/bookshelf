const rp = require('request-promise');

export default class BookService {

    _optionsBase = {
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };

    _urlBase = 'https://www.googleapis.com/books/v1/';

    _transformBook(item) {
        var vi = item.volumeInfo;
        if (!vi.imageLinks) vi.imageLinks = {};
        var img = vi.imageLinks.smallThumbnail;
        //if (!img)
        img = vi.imageLinks.thumbnail;
        return {
            id: item.id,
            authors: vi.authors,
            title: vi.title,
            pageCount: vi.pageCount,
            publishedDate: vi.publishedDate,
            img
        };
    }

    async getResource(url) {
        var options = { ...this._optionsBase, uri: `${this._urlBase}${url}` }
        const res = await rp(options).catch((err) => {
            console.log('Error getting data from Google API', err)
        });
        console.log('getResource', res);
        return res;
    }

    async getBooks(term) {
        var uri = `volumes?q=${term}`;
        return this.getResource(uri).then((res) => {
            return res.items.map(this._transformBook);
        });
    }

    async getBook(term) {
        return this.getBooks(term).then((res) => {
            return res[0];
        })
    }

}

