import React, { Component } from 'react';
import {randColors} from './Helpers';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            color : randColors(this.props.colors),
        }
        this.handleClick = this.handleClick.bind(this)
    }

    changeColor() {
        let newColor;
        do {
            newColor = randColors(this.props.colors);
        } while(newColor === this.state.color);

        this.setState({color : newColor});
    }

    handleClick(e) {
        this.changeColor();
    }

    render() {
        return <div onClick={this.handleClick} className="ColorBox" style={{backgroundColor : this.state.color}}>Aqui</div>
    }
}

export default ColorBox
