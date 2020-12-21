import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form'


class App extends Component {
  state = {
    name: '',
    age: '',
    list: [],
  }

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  formHandler = (e) => {
    e.preventDefault();
    // this.setState((state) => {
    //   const list = state.list.concat(state.name, state.age)

    //   return {
    //     list,
    //     name: '',
    //     age: ''
    //   };
    // });
    let arr = this.state.list;
    arr.push(this.state.name, this.state.age)
    this.setState({ list: arr })
    console.log(this.state.list);
  };

  render() {

    return (

      <div className="App">
        <Form click={this.inputHandler} sub={this.formHandler} />
        {this.state.list.map((person, index) => <li key={index}>{person}</li>)}

      </div>
    )
  }
}









export default App;
