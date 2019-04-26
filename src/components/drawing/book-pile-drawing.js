import React, { Component, Fragment } from 'react';
import { VerticalBookPileDrawing, HorizontalBookPileDrawing } from '.';
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
                {!vertical && <HorizontalBookPileDrawing {...this.props} />}
            </Fragment>
        );
    }
}