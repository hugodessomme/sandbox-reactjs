import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Manu', age: 28 },
      { name: 'Rebecca', age: 18 },
      { name: 'Leo', age: 54 }
    ],
    bird: 'baby'
  };

  switchNameHandler = (newName) => {
    //  Don't mutate state directly
    // this.state.persons[0].name = 'Test'
    this.setState({ 
      persons: [ 
        { name: newName, age: 28 },
        { name: 'Rebecca', age: 18 },
        { name: 'Leo', age: 10 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [ 
        { name: 'Manu', age: 28 },
        { name: event.target.value, age: 18 },
        { name: 'Leo', age: 54 }
      ]
    });
  }

  // With JSX
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>It works!</p>
  
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Nastya')}>
            Switch Name
        </button>
        
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler} 
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />        
      </div>
    );
  
    // No JSX? Here is how to do the same than above...
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello there'));
  }
}

export default App;
