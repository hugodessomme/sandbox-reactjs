import React from 'react';
import css from './Cockpit.module.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = css.red;
    }
    if (props.persons.length <= 2) {
        classes.push(css.red);
    }
    if (props.persons.length <= 1) {
        classes.push(css.bold);
    }
 
    return (
        <div className={css.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>It works!</p>

            <button className={btnClass} onClick={props.clicked}>
                Switch Name
            </button>
        </div>
    );
}

export default cockpit;