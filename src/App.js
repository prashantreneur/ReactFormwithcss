import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form'
import Card from './Components/Card'


class App extends Component {
  state = {
    id: 1,
    name: '',
    age: '',
    list: [],
  }

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  formHandler = (e) => {
    e.preventDefault();


    // 1st Method
    // this.setState((state) => {
    //   const list = state.list.concat(state.name, state.age)

    //   return {
    //     list,
    //     name: '',
    //     age: ''
    //   };
    // });


    //2 method

    let arr = this.state.list;
    const { name, age, id } = this.state
    arr.push({ name, age, id })
    this.setState({
      list: arr,
      id: this.state.id + 1
    })
    console.log(this.state.list);

  };

  resetHandler = () => {
    this.setState({ name: '', age: '' })
  }


  render() {
    const { name, age } = this.state;
    return (

      <div className='container' >
        <Form click={this.inputHandler} sub={this.formHandler} name={name} age={age} rest={this.resetHandler} />


        {this.state.list.map((person) => {
          return <div className='column'>

            <Card
              name={person.name}
              age={person.age}
            /></div>
        })}

      </div>

    )
  }
}









export default App;
