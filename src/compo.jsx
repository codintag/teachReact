import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 4
        }

    }

    increment = (e) => {
        console.log(e)
        this.setState((prevState, props) => (
            {count: prevState.count + props.step}
            ))
    }

    decrement = (e) => {
        //this.state.count > 0 && this.setState({count: this.state.count - 1})
        this.setState((prevState, props) => (
            { count: prevState.count > 0 ? prevState.count - props.step : 0 }
            ));
        
    }

    render() {
        return (
            <div>
                <h1 style={{color: this.props.color}}>Vous avez {this.state.count} copines.</h1>
                <button onClick={this.increment}>J'ai une nouvelle copine</button>
                <button onClick={this.decrement}>J'ai perdu une copine</button>
            </div>
        )
    }
}

export default Counter;