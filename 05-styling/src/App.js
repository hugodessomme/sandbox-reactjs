import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

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
        <div>
          {this.state.persons.map((person, index) => {
              return <Person 
                        key={person.id}
                        click={() => this.deletePersonHandler(index)} 
                        changed={(event) => this.nameChangedHandler(event, person.id)}
                        name={person.name} 
                        age={person.age} />
            })}   
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>It works!</p>
  
        <StyledButton alt={this.state.showPersons}onClick={this.togglePersonsHandler}>
          Switch Name
        </StyledButton>
        
        {persons}
      </div>
    );
  
    // No JSX? Here is how to do the same than above...
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello there'));
  }
}

export default App;
