import React from 'react';
import { Stage, Layer } from 'react-konva';

import { BookshelfDrawing, BookLibraryBackground } from '.';
import { pileMargin, shelfHeight, maxBookHeight, libraryVerticalPadding } from '../../utils/drawing/drawing-constants';
import { populateBookSizes, generateShelves, getKanvasHeight, getKanvasWidth } from '../../utils/drawing';

const BookLibraryDrawing = ({ books }) => {
    if (!books || books.length === 0) {
        return null;
    }

    const { kanvasWidth, kanvasHeight, shelves } = getLibraryParams(books);
    const startY = maxBookHeight + libraryVerticalPadding;

    return (
        <Stage width={kanvasWidth} height={kanvasHeight}>
            <Layer>
                <BookLibraryBackground width={kanvasWidth} height={kanvasHeight} />
                {
                    shelves.map((shelf, idx) =>
                        <BookshelfDrawing key={idx} shelf={shelf} y={startY + idx * shelfHeight} />
                    )
                }
            </Layer>
        </Stage>
    );
}

const getLibraryParams = (books) => {
    const booksWithSizes = populateBookSizes(books);

    const kanvasWidth = getKanvasWidth();
    const maxShelfWidth = kanvasWidth - pileMargin;
    const shelves = generateShelves(booksWithSizes, maxShelfWidth);
    const kanvasHeight = getKanvasHeight(shelves.length);

    return { kanvasWidth, kanvasHeight, shelves };
}

export default BookLibraryDrawing;