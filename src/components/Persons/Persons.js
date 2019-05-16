import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // 1) Lifecycle - Update
  // DO: Sync state to props
  // DON'T: cause side-effects
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  // 2) Lifecycle - Update (/!\ Important One /!\)
  // DO: decide whether to continue or not
  // DON'T: cause side-effects
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");

  //   if (nextProps.persons !== this.props.persons || 
  //       nextProps.clicked !== this.props.clicked || 
  //       nextProps.changed !== this.props.changed) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // 4) Lifecycle - Update
  // DO: last-minute DOM ops
  // DON'T: cause side-effects
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");

    return { mesage: "Snapshot" };
  }

  // 5) Lifecycle - Update (/!\ Important One /!\)
  // DO: cause side-effects
  // DON'T: update state (triggers re-render)
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  // 3) Lifecycle - Update
  // (trigger lifecycle for child components then)
  // DO: prepare & structure your JSX code
  render() {
    console.log("[Persons.js] rendering...");

    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
