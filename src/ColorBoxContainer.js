import React, { Component } from 'react'
import ColorBox from './ColorBox';
import {colors} from './Helpers';
import './ColorBoxContainer.css'


class ColorBoxContainer extends Component {

    static defaultProps = {
        boxes : Array.from({length : colors.length}),
        Allcolors : colors
    }

    render() {
        
        return (
            
            <div className="ColorBoxContainer">
                {this.props.boxes.map(d => <ColorBox colors={this.props.Allcolors}/>)}
            </div>
        )
    }
}

export default ColorBoxContainer
