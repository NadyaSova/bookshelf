import React, { Component, Fragment } from 'react';
import VerticalBookPileDrawing from './vertical-book-pile-drawing';
import HorizontalBookPileDrawing from './horizontal-book-pile-drawing';
import { Text } from 'react-konva';

export default class BookPileDrawing extends Component {
    render() {
        const { books, vertical } = this.props;
        if (!books || books.length === 0) {
            return (<Text></Text>);
        }

        return (
            <Fragment>
                {vertical && <VerticalBookPileDrawing {...this.props} />}
                {!vertical && <HorizontalBookPileDrawing {...this.props} /> }
            </Fragment>
        );
    }
}