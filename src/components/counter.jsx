import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value:this.props.counter.value,
    //     tags : ["tag1","tag2","tag3"]
    // }

    style ={
        fontSize:40,
        fontWeight:"bold"
    }
    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }

    // handleIncrement(){
    //     console.log("handle",this.state.count);
    // }
    // handleIncrement=()=>{
    //     console.log("handle",this.state.value);
    //     this.setState({value:this.state.value+1});
    // }

    
    render() {
       
        return (
            <div>
                {this.props.children}
                <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-success m-3 btn-lg">Increment</button>
                <button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-3 btn-lg">Delete</button>
                {/* {this.state.tags.length ===0 && "Please create a new tag!" }
                {this.renderTags()}
                 */}
               
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge badge-";
        classes += this.props.counter.value === 0 ? "primary" : "warning";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0? "zero" : value;
    }

    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>There are no tag!</p>;
    //     return  <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;
    // }
}

export default Counter;