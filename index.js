import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    constructor()
    {
        super();

        this.state = {
            counter: 0
        }
    }

    handleIncrement = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    handleDecrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    render() {
        return (
            <div className="container">
                <button className="btn btn-primary btn-sm" onClick={this.handleDecrement}>-</button>
                <span style={{ margin: 10 }}>{this.state.counter}</span>
                <button className="btn btn-primary btn-sm" onClick={this.handleIncrement}>+</button>
            </div>
        );
    }
}

// export default App;
render(<App />, document.getElementById('root'));
