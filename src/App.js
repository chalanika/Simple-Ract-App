import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className="container m-5"><Counters/></main>
    </div>
  );
}

export default App;
