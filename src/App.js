import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form'


class App extends Component {
  state = {
    name: '',
    age: '',
  }

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  formHandler = (e) => {
    // e.preventDefault();
    alert(`hi! ${this.state.name} Your age is: ${this.state.age}`);

  }

  render() {

    return (

      <div className="App">
        <Form click={this.inputHandler} sub={this.formHandler} />
      </div>
    )
  }
}









export default App;
