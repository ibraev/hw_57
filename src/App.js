import React, { Component } from 'react';
import './App.css';
import Items from './components/Additems'

class App extends Component {

  state = {
    foods : [
        {name: 'Milk', count: 0, price: 40},
        {name: 'Bread', count: 0, price: 15},
        {name: 'Dinner at cafe', count: 0, price: 400},
        {name: 'Bottle of water', count: 0, price: 25}
    ],

      total: 0,
  };

  render() {
    return (
      <div className="App">
        <Items></Items>
      </div>
    );
  }
}

export default App;
