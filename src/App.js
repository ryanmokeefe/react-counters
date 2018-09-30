import React, { Component } from "react";
import Header from "./Header";
import CounterList from './CounterList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      counters: 6
    };
  
    this.increaseAmount = this.increaseAmount.bind(this);

    this.decreaseAmount = this.decreaseAmount.bind(this);

  }

  render() {
    return (
      <div className="App">
        <Header increaseAmount={this.increaseAmount} decreaseAmount={this.decreaseAmount}/>
        <CounterList counters={this.state.counters} />
      </div>
    );
  }

  increaseAmount() {
    let counters = this.state.counters + 1;

    this.setState({
      counters
    });
  }

  decreaseAmount() {
    let counters = this.state.counters - 1;

    this.setState({
      counters
    });
  }

}

export default App
