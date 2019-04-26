import React, { Component } from 'react'
import { Text, Rect } from 'react-konva';
import Konva from 'konva';

import { maxFontSize, minFontSize } from '../../utils/drawing/drawing-constants';

const padding = 3;
const basicTestSettings = {
    padding: padding,
    fill: 'black',
    wrap: 'word',
    align: 'center'
};
const authorsTextSettings = { ...basicTestSettings, fontFamily: 'Montserrat' };
const titleTextSettings = { ...basicTestSettings, fontFamily: 'Alegreya SC', fontStyle: 'bolder' };


export default class BookDrawing extends Component {

    componentDidMount() {
        const { vertical } = this.props;
        if (vertical) {
            this.textAuthors.rotate(-90);
            this.textTitle.rotate(-90);
            this.rectBook.rotate(-90);
        }
    }

    authorsFontSize(titleFontSize) {
        const fontSize = titleFontSize - 4;
        return Math.max(fontSize, minFontSize);
    }

    adjustFontSize(fontSize) {
        if (fontSize < minFontSize)
            return fontSize;

        const { title, authors, width: bookWidth, height: bookHeight } = this.props;

        const titleElement = new Konva.Text(
            {
                text: title,
                fontSize: fontSize,
                width: bookHeight,
                ...titleTextSettings
            }
        );
        const authorsElement = new Konva.Text(
            {
                text: authors,
                fontSize: this.authorsFontSize(fontSize),
                width: bookHeight,
                ...authorsTextSettings
            }
        );

        const titleElementHeight = titleElement.height();
        const authorsElementHeight = authorsElement.height();
        const textHeight = titleElementHeight + authorsElementHeight;

        if (textHeight <= bookWidth)
            return { fontSize, authorsElementHeight, textHeight };

        return this.adjustFontSize(fontSize - 1);
    }

    render() {
        const { title, authors, x, y, width: bookWidth, height: bookHeight, vertical } = this.props;

        const { fontSize, authorsElementHeight, textHeight } = this.adjustFontSize(maxFontSize);

        const textMargin = (bookWidth - textHeight) / 2;
        const xAuthors = vertical ? x + textMargin : x;
        const yAuthors = vertical ? y : y + textMargin;

        const xTitle = vertical ? xAuthors + authorsElementHeight : xAuthors;
        const yTitle = vertical ? yAuthors : yAuthors + authorsElementHeight;

        return (
            <React.Fragment>

                <Rect
                    x={x}
                    y={y}
                    height={bookWidth}
                    width={bookHeight}
                    ref={ref => (this.rectBook = ref)}
                    fill='white'
                    stroke='saddlebrown'
                    strokeWidth={3}
                />

                <Text
                    x={xAuthors}
                    y={yAuthors}
                    ref={ref => (this.textAuthors = ref)}
                    fontSize={this.authorsFontSize(fontSize)}
                    text={authors}
                    height={bookWidth}
                    width={bookHeight}
                    {...authorsTextSettings}
                />

                <Text
                    x={xTitle}
                    y={yTitle}
                    ref={ref => (this.textTitle = ref)}
                    fontSize={fontSize}
                    text={title}
                    height={bookWidth - authorsElementHeight}
                    width={bookHeight}
                    {...titleTextSettings}
                />

            </React.Fragment>
        );
    }
}