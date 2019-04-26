import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';

import BookShelfDrawing from '../book-shelf-drawing';
import BookLibraryBackground from '../book-library-background';
import { pileMargin, shelfHeight, maxBookHeight, libraryVerticalPadding } from '../../../helpers/drawing-constants'; //todo:move to drawing
import { bookSizesGenerator, pilesGenerator, getKanvasHeight, getKanvasWidth } from '../../../helpers';

const BookLibraryDrawing = ({ books }) => {
    if (!books || books.length === 0) {
        return null;
    }
    
    const booksWithSizes = bookSizesGenerator(books);

    const kanvasWidth = getKanvasWidth();
    const maxWidth = kanvasWidth - pileMargin;
    const shelves = pilesGenerator(booksWithSizes, maxWidth);

    const kanvasHeight = getKanvasHeight(shelves.length);

    var shelfY = maxBookHeight + libraryVerticalPadding;
    return (
        <Stage width={kanvasWidth} height={kanvasHeight}>
            <Layer>
                <BookLibraryBackground width={kanvasWidth} height={kanvasHeight}/>                
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