import React, { Component } from 'react'
import { Text, Label, Tag } from 'react-konva';
import Konva from 'konva';

import { maxFontSize, minFontSize } from '../../../helpers/drawing-constants';

export default class BookDrawing extends Component {

    componentDidMount() {
        const { vertical } = this.props;
        if (vertical)
            this.label.rotate(-90);
    }

    adjustFontSize(fontSize) {
        if (fontSize < minFontSize)
            return fontSize;

        const { title, width: bookWidth, height: bookHeight } = this.props;

        //todo: get this element and <Text> settings from the same place
        const element = new Konva.Text({
            text: title,
            fontFamily: 'Calibri',
            fontSize: fontSize,
            padding: 5,
            fill: 'black',
            wrap: 'word',
            align: 'center',
            width: bookHeight
        });
        const elementHeight = element.height();

        if (elementHeight <= bookWidth)
            return fontSize;

        return this.adjustFontSize(fontSize - 1);
    }

    render() {
        const fontSize = this.adjustFontSize(maxFontSize);
        const { title, x, y, width: bookWidth, height: bookHeight } = this.props;

        return (
            <Label x={x}
                y={y}
                ref={ref => (this.label = ref)}>

                <Tag stroke={'brown'} />

                <Text text={title}
                    fontFamily='Calibri'
                    fontSize={fontSize}
                    padding={5}
                    fill='black'
                    wrap='word'
                    align='center'
                    height={bookWidth}
                    width={bookHeight} />
            </Label>
        );
    }
}