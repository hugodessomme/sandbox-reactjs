import React, { Component, Fragment } from "react";
import styles from "./Person.module.css";
// import Aux from "../../../hoc/Auxiliary";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment>
        <div className={styles.Person}>
          <p onClick={this.props.click}>
            I'm {this.props.name}! I am {this.props.age} years old...
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Fragment>
    );
  }
}

export default Person;
