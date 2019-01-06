import React, { Component } from 'react';
import './App.css';
import Palette from './Palette.js';

class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            palette: Palette.rgb()
        };

        this.cycleColors = this.cycleColors.bind(this);
    }

    cycleColors(event) {
        let element = event.target;
        let cycle = this.state.palette;
    
        let newName = 'Square '.concat(cycle[element.className.split(' ')[1]]);
        element.className = newName;
    }

    paletteSwap(newPalette) {
        this.setState({
           palette: newPalette 
        });
    }

    render() {
        return (<div onClick = {this.cycleColors} className = { 'Square '.concat(( this.props.color )) }></div>);
    };
}

class Grid extends Component {
    createSquares() {
        let squares = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                
                squares.push(<Square color = 'white' />);
            }
        }

        return squares;
    }

    render() {
        return (
            <div className = 'Grid'>
                { this.createSquares() }
            </div>
        );
    };
}

class App extends Component {
    constructor() {
        super();

        this.state = {
            "frames": [<Grid />]
        }

        this.addFrame = this.addFrame.bind(this);
        this.deleteFrame = this.deleteFrame.bind(this);
    }

    addFrame() {
        this.setState(
            {"frames": this.state.frames.concat(<Grid />)}
        );
    }

    deleteFrame() {
        this.setState(
            {frames: this.state.frames.slice(0, this.state.frames.length - 1)}
        );
    }

    render() {
        return (
        <div className="App">
            <button class = 'add' onClick = {this.addFrame}>+</button>
            <button class = 'remove' onClick = {this.deleteFrame}>-</button>
            {this.state.frames}
        </div>
        );
    }
}

export default App;
