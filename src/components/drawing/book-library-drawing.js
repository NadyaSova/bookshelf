import React from 'react';
import { Stage, Layer } from 'react-konva';

import { BookShelfDrawing, BookLibraryBackground } from '.';
import { pileMargin, shelfHeight, maxBookHeight, libraryVerticalPadding } from '../../utils/drawing/drawing-constants';
import { populateBookSizes, generateShelves, getKanvasHeight, getKanvasWidth } from '../../utils/drawing';

const BookLibraryDrawing = ({ books }) => {
    if (!books || books.length === 0) {
        return null;
    }

    const booksWithSizes = populateBookSizes(books);

    const kanvasWidth = getKanvasWidth();
    const maxWidth = kanvasWidth - pileMargin;
    const shelves = generateShelves(booksWithSizes, maxWidth);

    const kanvasHeight = getKanvasHeight(shelves.length);

    var shelfY = maxBookHeight + libraryVerticalPadding;
    return (
        <Stage width={kanvasWidth} height={kanvasHeight}>
            <Layer>
                <BookLibraryBackground width={kanvasWidth} height={kanvasHeight} />
                {
                    shelves.map((shelf, idx) => {
                        const shelfDrawing = <BookShelfDrawing key={idx} shelf={shelf} y={shelfY} />;
                        shelfY += shelfHeight;
                        return shelfDrawing;
                    })
                }
            </Layer>
        </Stage>
    );
}

export default BookLibraryDrawing;