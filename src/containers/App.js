import React, { Component } from "react";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxiliary";

class App extends Component {
  // 1) Lifecycle - Creation
  // DO: set up state
  // DON'T: cause side-effects
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: 3653, name: "Max", age: 28 },
      { id: 9879, name: "Manu", age: 29 },
      { id: 8478, name: "Stef", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  };

  // 2) Lifecycle (rarely used) - Creation
  // DO: Sync state
  // DON'T: cause side-effects
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // 4) Lifecycle - Creation (/!\ Important One /!\)
  // DO: cause side-effects
  // DON'T: update state (triggers re-render)
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  // 2) Lifecycle - Update (/!\ Important One /!\)
  // DO: decide whether to continue or not
  // DON'T: cause side-effects
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");

    return true;
  }

  // 5) Lifecycle - Update (/!\ Important One /!\)
  // DO: cause side-effects
  // DON'T: update state (triggers re-render)
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  };

  // 3) Lifecycle - Creation
  // (trigger lifecycle for child components then)
  // DO: prepare & structure your JSX code
  render() {
    console.log("[App.js] render");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi', 'Hugo !!!'));
  }
}

export default withClass(App, styles.App);
