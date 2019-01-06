import React, { Component } from 'react';
import './App.css';
import Palette from './Palette.js';

class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "palette": Palette.rgb(),
            "color": "white"
        };

        this.cycleColors = this.cycleColors.bind(this);
    }

    cycleColors() {
        let cycle = this.state.palette;

        this.setState(
            { "color": cycle[this.state.color] }
        )
        
        this.render();
    }

    paletteSwap(newPalette) {
        this.setState({
           palette: newPalette 
        });
    }

    render() {
        return (<div onClick = { this.cycleColors } className = { 'Square '.concat(( this.state.color )) }></div>);
    };
}

class Grid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "squares": this.props.squares
        }
    }

    render() {
        return (
            <div className = 'Grid'>
                { this.state.squares }
            </div>
        );
    };
}

class App extends Component {
    constructor() {
        super();

        this.state = {
            "frames": [<Grid squares = { this.createSquares() } />],
        }

        this.createSquares = this.createSquares.bind(this);
        this.addFrame = this.addFrame.bind(this);
        this.deleteFrame = this.deleteFrame.bind(this);
        this.animate = this.animate.bind(this);
    }

    createSquares() {
        let squares = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                squares.push(<Square color = 'white' />);
            }
        }

        return squares;
    }

    addFrame() {
        this.setState(
            { "frames": this.state.frames.concat(<Grid squares = { this.createSquares() }/>) }
        );
    }

    deleteFrame() {
        this.setState(
            { "frames": this.state.frames.slice(0, this.state.frames.length - 1) }
        );
    }

    animate() {
        for (let i = 0; i < this.state.frames.length; i++) {
            console.log(this.state.frames[i]);
            
        };
    }

    render() {
        return (
        <div className="App">
            <header>
                <h1>PixelD</h1>
                <div className="controls">
                    <button className='add' onClick = { this.addFrame }>+</button>
                    <button className='remove' onClick = { this.deleteFrame }>-</button>
                </div>
            </header>
            <main>
                <div className="frames">
                    { this.state.frames }
                </div>
            </main>
            <footer>
                <button onClick = { this.animate }>Animate!</button>
                <div className="animation">
                    <Grid squares = { this.createSquares() }/>
                </div>
            </footer>
        </div>
        );
    }
}

export default App;
