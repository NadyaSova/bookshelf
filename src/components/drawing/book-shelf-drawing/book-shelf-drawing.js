import React, { Fragment } from 'react';

import BookPileDrawing from '../book-pile-drawing';
import RackDrawing from '../rack-drawing';
import { getEvenedPileMargin } from '../../../helpers';

const BookShelfDrawing = ({ shelf, y }) => {

    var evenedPileMargin = getEvenedPileMargin(shelf)
    var width = evenedPileMargin;

    return (
        <Fragment>
            {shelf.map(pile => {
                const pileDrawing = (
                    <BookPileDrawing
                        key={pile.books[0].id}
                        books={pile.books}
                        vertical={pile.vertical}
                        x={width}
                        y={y} />
                );
                width += (pile.width + evenedPileMargin)
                return pileDrawing;
            })}
            <RackDrawing  y={y}/>
        </Fragment>
    );
}

export default BookShelfDrawing;