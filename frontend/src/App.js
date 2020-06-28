import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // constructor(props){
  //   super(props);
  //   console.log("App-constructor",this.props);
  //   // this.state = this.props.something
  // }

  constructor(){
    super();
    console.log("App-constructor");
  }

  componentDidMount(){
    //Ajax call
    //this.setState({movies})
    console.log("App-mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    //console.log(this.state.counters[0]);
    this.setState({ counters });
  }


  handleDelete = id => {
    console.log('Event Handler called', id);
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
  }

  render() {
    console.log("App-rendered");
    return (
      <div>
        <Navbar 
          totalCounters ={this.state.counters.filter(c=> c.value !== 0).length}
        />
        <main className="container m-5">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />
        </main>
      </div >
    );
  }
}

export default App;
