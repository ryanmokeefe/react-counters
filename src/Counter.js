import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        
        this.state = {
            count: 0
        }

        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this)

    }
    render() {
        return(
            <div>
                <h4> Counter: {this.state.count} </h4>
                <button onClick={this.increaseCount}>+</button>
                <button onClick={this.decreaseCount}>-</button>
            </div>
        )
    }

    increaseCount() {
        let count = this.state.count + 1;

        this.setState({
            count
        });
    }

    decreaseCount(){
        let count = this.state.count - 1;

        this.setState({
            count
        });
    }
}

export default Counter
