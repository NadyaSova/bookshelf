import React, { Component } from 'react'
import { Text, Label, Tag } from 'react-konva';
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
            this.labelAuthors.rotate(-90);
            this.labelTitle.rotate(-90);
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
        const elementHeight = titleElementHeight + authorsElementHeight;

        if (elementHeight <= bookWidth)
            return { fontSize, authorsElementHeight };

        return this.adjustFontSize(fontSize - 1);
    }

    render() {
        const { fontSize, authorsElementHeight } = this.adjustFontSize(maxFontSize);
        const { title, authors, x, y, width: bookWidth, height: bookHeight, vertical } = this.props;

        const yTitle = vertical ? y : y + authorsElementHeight;
        const xTitle = vertical ? x + authorsElementHeight : x;

        return (
            <React.Fragment>

                <Label x={x}
                    y={y}
                    ref={ref => (this.labelAuthors = ref)}>

                    <Tag stroke={'saddlebrown'} strokeWidth={3} fill={'white'} />

                    <Text
                        fontSize={this.authorsFontSize(fontSize)}
                        text={authors}
                        height={bookWidth}
                        width={bookHeight}
                        {...authorsTextSettings}
                    />
                </Label>

                <Label x={xTitle}
                    y={yTitle}
                    ref={ref => (this.labelTitle = ref)}>

                    <Text
                        fontSize={fontSize}
                        text={title}
                        height={bookWidth - authorsElementHeight}
                        width={bookHeight}
                        {...titleTextSettings}
                    />
                </Label>
                
            </React.Fragment>
        );
    }
}