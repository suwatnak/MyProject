import React, { Component } from 'react';
import { Form, Contacts } from '../components';

class App extends Component {
  state = {
    contacts : [
      { name: 'Suwat Nakchukaew', address: '70/78 m.2' }
    ]
  }
  createContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }
  render() {
    return (
      <div className="container">
        <Form onSubmit={this.createContact}/>
        <hr />
        <Contacts {...this.state}/>
      </div>
    );
  }
}

export default App;
