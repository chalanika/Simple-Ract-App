import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => (
                <Counter 
                    key={counter.id}  
                    onDelete={this.handleDelete} 
                    onIncrement = {this.handleIncrement}
                    counter = {counter}
                >
                {/* <h4>Counter #{counter.id}</h4> */}
                </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;