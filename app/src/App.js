import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function cycleColors(event) {
    let element = event.target;
    let cycle = {
        'black': 'white',
        'white': 'blue',
        'blue': 'black' 
    };

    let newName = 'Square '.concat(cycle[element.className.split(' ')[1]]);
    element.className = newName;
}

class Square extends Component {
    render() {
        return (<div onClick = {cycleColors} className = { 'Square '.concat(( this.props.color )) }></div>);
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
