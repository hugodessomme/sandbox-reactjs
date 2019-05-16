import React, { useEffect } from "react";
import styles from "./Cockpit.module.css";

const cockpit = props => {
  // Last argument means this code will be triggered
  // only if this data is updated
  // /!\ We can use several userEffect function for each data
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // HTTP requests...
    const timer = setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []); // If empty array is passed,
  // it will be triggered only once because
  // it indicates that if dependencies are updated
  // then re-run this code, with an empty array,
  // there is no dependencies

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");

    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const classes = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.personsLength <= 2) {
    classes.push(styles.red);
  }

  if (props.personsLength <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default React.memo(cockpit);
