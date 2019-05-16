import React, { Component, Fragment } from "react";
import withClass from "../../../hoc/withClass";
// import Aux from "../../../hoc/Auxiliary";
import styles from "./Person.module.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment>
        <p onClick={this.props.click}>
          I'm {this.props.name}! I am {this.props.age} years old...
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

export default withClass(Person, styles.Person);
