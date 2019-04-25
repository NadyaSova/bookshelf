import React from 'react';
import { Stage, Layer } from 'react-konva';

import BookShelfDrawing from '../book-shelf-drawing';
import { pileMargin, shelfHeight, maxBookHeight } from '../../../helpers/drawing-constants'; //todo:move to drawing
import { bookSizesGenerator, pilesGenerator } from '../../../helpers';

const BookLibraryDrawing = ({ books }) => {
    if (!books || books.length === 0) {
        return null;
    }
    
    const booksWithSizes = bookSizesGenerator(books);
    const drawingWidth = window.innerWidth - 40;
    const maxWidth = drawingWidth - pileMargin;
    const shelves = pilesGenerator(booksWithSizes, maxWidth);
    const drawingHeight = shelves.length * shelfHeight + 10;

    var shelfY = maxBookHeight + pileMargin;
    return (
        <Stage width={drawingWidth} height={drawingHeight}>
            <Layer>
                {
                    shelves.map(shelf => {
                        const shelfDrawing = <BookShelfDrawing shelf={shelf} y={shelfY} />;
                        shelfY += shelfHeight;
                        return shelfDrawing;
                    })
                }
            </Layer>
        </Stage>
    );
}

export default BookLibraryDrawing;