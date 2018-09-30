import React, { Component } from 'react';
import Counter from './Counter';

class CounterList extends Component {
 
    render() {
        let list = [];
        for(let i = 0; i < this.props.counters; i++) {
            list.push(<Counter />)
        }
    
        return (<div className="list">{list}</div>)
      }

}

export default CounterList
