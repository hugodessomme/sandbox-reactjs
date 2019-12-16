import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Manu', age: 28 },
      { id: 2, name: 'Rebecca', age: 18 },
      { id: 3, name: 'Leo', age: 54 }
    ],
    bird: 'baby',
    showPersons: false
  };

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);

    this.setState({ 
      persons: persons 
    });
  }

  togglePersonsHandler = () => {
    this.setState({ 
      showPersons: !this.state.showPersons 
    });
  }

  nameChangedHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === index;
    });
    
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  // With JSX
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} /> 
      );
    }

    return (
      <div className="App">
        <Cockpit 
          persons={this.state.persons} 
          showPersons={this.state.showPersons} 
          clicked={this.togglePersonsHandler} />
        
        {persons}
      </div>
    );
  
    // No JSX? Here is how to do the same than above...
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello there'));
  }
}

export default App;
