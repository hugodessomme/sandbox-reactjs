import React, { Component } from 'react';
import css from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Manu', age: 28 },
      { id: 2, name: 'Rebecca', age: 18 },
      { id: 3, name: 'Leo', age: 54 }
    ],
    bird: 'baby',
    showPersons: false,
    showCockpit: true,
    counter: 0,
    authenticated: false
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        counter: prevState.counter + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
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
          changed={this.nameChangedHandler} 
          isAuthenticated={this.state.authenticated} /> 
      );
    }

    return (
      <Auxiliary>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.setState({ showCockpit: false })}>Remove Cockpit</button>

        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated, 
            login: this.loginHandler 
          }}
        >
          {this.state.showCockpit ? <Cockpit 
            personsLength={this.state.persons.length} 
            showPersons={this.state.showPersons} 
            clicked={this.togglePersonsHandler} 
            login={this.loginHandler} /> : null}
          
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
    );
  
    // No JSX? Here is how to do the same than above...
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello there'));
  }
}

export default withClass(App, css.App);
