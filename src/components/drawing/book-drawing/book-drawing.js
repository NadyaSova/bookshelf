import React, { Component } from 'react'
import { Text, Label, Tag } from 'react-konva';

export default class BookDrawing extends Component {

    componentDidMount() {
        const { vertical } = this.props;
        if (vertical)
            this.label.rotate(-90);
    }

    render() {
        const { title, x, y, width: bookWidth, height: bookHeight } = this.props;
        return (
            <React.Fragment>
                <Label
                    x={x}
                    y={y}
                    ref={ref => (this.label = ref)}>

                    <Tag
                        stroke={'black'} />

                    <Text
                        text={title}
                        fontFamily='Calibri'
                        fontSize={18}
                        padding={5}
                        fill='black'
                        wrap='word'
                        align='center'
                        height={bookWidth}
                        width={bookHeight}
                    ></Text>
                </Label>
            </React.Fragment>
        );
    }
}