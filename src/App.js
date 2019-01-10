import React, { Component } from 'react';
import './App.css';
import Form from './components/Form-items';
import Purchase from './components/Purchases'

class App extends Component {

    state = {
        purchases: [],
        title: '',
        cost: 0,
        total: 0,
    };



    setCost = (e) => {

        if (e.target.value > 0) {
            this.setState({cost: e.target.value})
        }
        else {
            alert('The cost can not be 0');
            e.target.value = '';
        }
    };

    setTitle = (e) => {
        this.setState({title: e.target.value})

    };

    addItems = () => {
        const copyState = [...this.state.purchases];

        let object = {
            title: this.state.title,
            cost: this.state.cost
        };

        copyState.push(object);

        let total = copyState.reduce((totalCost, item) => totalCost + parseInt(item.cost), 0);

        this.setState({purchases: copyState, total: total});


    };

    remove = (index) => {
        const copyState = [...this.state.purchases];

        const indexOfState = copyState[index];
        copyState.splice(index, 1);

        let total = this.state.total;
        total -= indexOfState.cost;

        this.setState({purchases: copyState, total: total})
    };

  render() {
    return (
      <div className="App">
          <div className='container'>
              <h1>Personal data accounting</h1>
              <Form onChangeTitle={(e) => this.setTitle(e)}
                    onChangeCost={(e) => this.setCost(e)}
                    addItems={() => this.addItems()}/>
              <Purchase
                  keys={this.state.purchases}
                  remove={this.remove}/>

              <div className="total-spent"><p>Total spent</p>
                  <p>{this.state.total} KGS</p></div>
          </div>


      </div>
    );
  }
}

export default App;
