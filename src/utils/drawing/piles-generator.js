import { pileMargin } from './drawing-constants';

const maxHeight = 200;
const minBooksInVerticalPile = 3;
const maxBooksInVerticalPile = 6;

function pilesGenerator(books, maxWidth) {

    var booksCount = 0;
    var shelves = [];

    while (booksCount < books.length) {
        var shelf = generateShelf(books.slice(booksCount), maxWidth);
        shelves.push(shelf.piles);
        booksCount += shelf.booksCount;
    }
    return shelves;
}

function generateShelf(books, maxWidth) {

    var width = 0;
    var booksCount = 0;
    var piles = [];
    var vertical = Math.random() > 0.5;

    while (booksCount < books.length && width < maxWidth) {
        var generatePile = vertical ? VerticalPileGenerator : HorizontalPileGenerator;
        var pile = generatePile(books.slice(booksCount), maxWidth - width);

        if (pile.books.length === 0)
            return { piles, booksCount };

        piles.push(pile);

        booksCount += pile.books.length;
        width += (pile.width + pileMargin);
        vertical = !vertical;
    }
    return { piles, booksCount };
}

function VerticalPileGenerator(books, maxPileWidth) {

    const booksInPileCount = Math.min(
        books.length,
        Math.floor(Math.random() * (maxBooksInVerticalPile - minBooksInVerticalPile) + minBooksInVerticalPile)
    );

    var booksInPile = [];

    for (var i = 0, width = 0; i < booksInPileCount; i++) {
        const book = books[i];
        if (width + book.width >= maxPileWidth)
            break;

        width += book.width;
        booksInPile.push(book);
    }

    return { books: booksInPile, width, vertical: true };
}

function HorizontalPileGenerator(books, maxPileWidth) {
    if (books.length === 0) {
        return { books: [], width: 0, vertical: false };
    }

    var booksInPile = [];
    var pileWidth = 0;

    for (var i = 0, height = books[0].width;
        i < books.length && books[i].height < maxPileWidth && height < maxHeight;
        i++ , height += (books[i] || {}).width) {

        const book = books[i];
        pileWidth = Math.max(pileWidth, book.height);
        booksInPile.push(book);
    }
    return { books: booksInPile, width: pileWidth, vertical: false };
}

export default pilesGenerator;