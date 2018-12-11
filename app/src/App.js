import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends Component {
    render() {
        return (<div className = 'Square red'></div>);
    };
}



class Grid extends Component {
    createSquares() {
        let squares = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                squares.push(<Square />);
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
