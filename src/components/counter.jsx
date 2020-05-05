import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        imageUrl:"https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg"
    }

    style ={
        fontSize:20,
        fontWeight:"bold"
    }
    render() {
        
        return (
            <div>
                <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-success m-3">sent</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge badge-";
        classes += this.state.count === 0 ? "primary" : "warning";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0? "zero" : count;
    }
}

export default Counter;