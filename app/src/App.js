import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Palette {
    static sonic() {
        return {
            'white': 'blue',
            'blue': 'red',
            'red': 'black',
            'black': 'white',
        }
    }

    static mario() {
        return {
            'white': 'tan',
            'tan': 'brown',
            'brown': 'red',
            'red': 'white'
        }
    }

    static grass() {
        return {
            'lime': 'green',
            'green': 'yellow',
            'yellow': 'tan',
            'tan': 'lime'
        }
    }

    static femme() {
        return {
            'pink': 'magenta',
            'magenta': 'purple',
            'purple': 'red',
            'red': 'pink'
        }
    }

    static printer() {
        return {
            'yellow': 'cyan',
            'cyan': 'magenta',
            'magenta': 'black',
            'black': 'yellow'
        }
    }

    static rgb() {
        return {
            'white': 'red',
            'red': 'lime',
            'lime': 'blue',
            'blue': 'white'
        }
    }
}

class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            palette: Palette.mario()
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
    render() {
        return (
        <div className="App">
            <Grid />
            <Grid />
            <Grid />
            <Grid />
        </div>
        );
    }
}

export default App;
