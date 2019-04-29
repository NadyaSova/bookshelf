import { pileMargin, maxBookHeight, minBooksInVerticalPile, maxBooksInVerticalPile } from './drawing-constants';

function generateShelves(books, maxWidth) {
    let booksCount = 0;
    const shelves = [];

    while (booksCount < books.length) {
        const shelf = generateShelf(books.slice(booksCount), maxWidth);
        shelves.push(shelf.piles);
        booksCount += shelf.booksCount;
    }
    return shelves;
};

function generateShelf(books, maxWidth) {
    const piles = [];
    let pilesWidth = 0;
    let booksCount = 0;
    let vertical = Math.random() > 0.5;

    while (booksCount < books.length && pilesWidth < maxWidth) {
        let generatePile = vertical ? generateVerticalPile : generateHorizontalPile;
        let pile = generatePile(books.slice(booksCount), maxWidth - pilesWidth);

        if (pile.books.length === 0)
            return { piles, booksCount };

        piles.push(pile);
        booksCount += pile.books.length;
        pilesWidth += (pile.width + pileMargin);
        vertical = !vertical;
    }
    return { piles, booksCount };
};

function generateVerticalPile(books, maxPileWidth) {
    const booksInPile = [];
    const booksInPileCount = Math.min(
        books.length,
        Math.floor(Math.random() * (maxBooksInVerticalPile - minBooksInVerticalPile) + minBooksInVerticalPile)
    );

    for (var i = 0, pileWidth = 0; i < booksInPileCount; i++) {
        const book = books[i];
        if (pileWidth + book.width >= maxPileWidth)
            break;

        pileWidth += book.width;
        booksInPile.push(book);
    }

    return { books: booksInPile, width: pileWidth, vertical: true };
};

function generateHorizontalPile(books, maxPileWidth) {
    if (books.length === 0) {
        return { books: [], width: 0, vertical: false };
    }

    const booksInPile = [];
    let pileWidth = 0;

    for (let i = 0, height = books[0].width;
        i < books.length && books[i].height < maxPileWidth && height < maxBookHeight;
        i++ , height += (books[i] || {}).width) {

        const book = books[i];
        pileWidth = Math.max(pileWidth, book.height);
        booksInPile.push(book);
    }
    return { books: booksInPile, width: pileWidth, vertical: false };
};

export default generateShelves;