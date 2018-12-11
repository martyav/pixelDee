import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends Component {
    render() {
        return (<div className = { 'Square ' + ( this.props.color ) }></div>);
    };
}



class Grid extends Component {
    createSquares() {
        let squares = [];
        let colors = ['red', 'black', 'white'];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                
                squares.push(<Square color = { colors[j % 3] } />);
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
