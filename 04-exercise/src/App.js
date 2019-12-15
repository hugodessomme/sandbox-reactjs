import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';


class App extends Component {
  state = {
    value: "",
  };

  inputHandler = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  deleteCharHandler = (index) => {
    const valueArr = this.state.value.split('');
    valueArr.splice(index, 1);

    const newValue = valueArr.join('');
    
    this.setState({
      value: newValue
    });
  }

  render() {
    const chars = this.state.value.split('').map((char, index) => {
      return <Char key={index} char={char} click={() => this.deleteCharHandler(index)} />
    });

    return (
      <div className="App">
        <input type="text" value={this.state.value} onChange={this.inputHandler} />
        <p>{this.state.value.length}</p>
        <Validation valueLength={this.state.value.length} />
        {chars}
       
        <ol>
            <li>OK Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li>OK Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li>OK Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>OK Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li>OK Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>OK When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
