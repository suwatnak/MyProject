import React, { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';

class App extends Component {
  state = {
    contacts : [
      { name: 'Somchai Haa', address: '123/456' }
    ]
  }
  render() {
    return (
      <div className="container">
        <Form />
        <hr />
        <Contacts {...this.state}/>
      </div>
    );
  }
}

export default App;
